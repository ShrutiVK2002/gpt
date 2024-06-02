import { MongoDBAtlasVectorSearch } from "@langchain/community/vectorstores/mongodb_atlas";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MongoClient } from "mongodb";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "langchain/text_splitter";

const openAIApiKey = "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";


const client = new MongoClient('mongodb+srv://sapatesanket09:UPGv2hg53qNE0Oy0@vectorstore.hrzbyxs.mongodb.net/?retryWrites=true&w=majority' || "");

const collection = client.db("vectoreStore").collection("winterbot");


const docs = await (new PDFLoader("C:\JanhviR.pdf")).load();

const splitter = new CharacterTextSplitter({
  separator: "\n",
  chunkSize: 100,
  chunkOverlap: 25,
});

var page = await splitter.splitDocuments(docs);


const vectorstore = await MongoDBAtlasVectorSearch.fromDocuments(
    page,
    new OpenAIEmbeddings({openAIApiKey}),
    {
      collection,
    }
  );


const result = await vectorstore.similaritySearch("janhvi", 1);
console.log(result);


const end = await client.close();
console.log(end);
