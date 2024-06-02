import{ MemoryVectorStore} from  "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
 import { CharacterTextSplitter } from "langchain/text_splitter";

const openAIApiKey = "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";

const docs = await (new PDFLoader('D:/gpt/gpt/Server/Haunting-Adeline.pdf')).load();

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

const resultOne = await vectorStore.similaritySearch("Adeline" , 2);
console.log(resultOne);