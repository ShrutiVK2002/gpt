import { MongoDBAtlasVectorSearch } from "@langchain/community/vectorstores/mongodb_atlas";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MongoClient } from "mongodb";

const openAIApiKey = "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";

const client = new MongoClient('mongodb+srv://sapatesanket09:UPGv2hg53qNE0Oy0@vectorstore.hrzbyxs.mongodb.net/?retryWrites=true&w=majority' || "");

const collection = client.db("vectoreStore").collection("winterbot");


const vectorstore = new MongoDBAtlasVectorSearch(
   new OpenAIEmbeddings({openAIApiKey}),
    {
      collection,
    }
  );

  const retriever  = vectorstore.asRetriever(
    {
        searchType : "mmr",
        searchKwargs: {
            fetchK: 3,
            lambda : 0.5,
        }
    }
  );

  const result = await retriever._getRelevantDocuments("janhvi");
  console.log(result);

  await client.close();