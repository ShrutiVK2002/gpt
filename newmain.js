import {OpenAI} from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import{ MemoryVectorStore} from  "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
 import { CharacterTextSplitter } from "langchain/text_splitter";


 let que = "who is Adeline ?"
const model = new OpenAI({ 
    openAIApiKey: "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" , 
    temperature: 0.9 , 
    verbose: true
});
const openAIApiKey = "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";

 const loader = new PDFLoader('D:/gpt/gpt/Server/Haunting-Adeline.pdf')
const docs = await loader.load();

const text_splitter = new CharacterTextSplitter({
     separator:  "\n",
    chunk_size: 500,
    chunk_overlap: 200,
 })
  var pages = await text_splitter.splitDocuments(docs)

  const vectorStore = await MemoryVectorStore.fromDocuments(
    pages,
    new OpenAIEmbeddings({openAIApiKey})
  );

  const resultOne = await vectorStore.similaritySearch(que , 4);
   let result = ""
   resultOne.forEach((Element) => {
    result += Element.pageContent + "/n"
   })

   
const prompt =
   PromptTemplate.fromTemplate(`this is the context provided by user: {result} \n
   if you can't answer the question, please answer the question according to the context provided by user. And your traits\n
   human : {input}`
   );

   const chain = prompt.pipe(model);

   const res = await chain.invoke({ input: que , result });
     console.log({ res });









  
  

