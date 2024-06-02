import {OpenAI} from "@langchain/openai";
import { ConversationSummaryMemory } from "langchain/memory";
import {ConversationalRetrievalQAChain} from "langchain/chains";
import { MongoDBAtlasVectorSearch } from "@langchain/community/vectorstores/mongodb_atlas";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MongoClient } from "mongodb";

const openAIApiKey = "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";

const model = new OpenAI({ 
    openAIApiKey, 
    temperature: 0.9 , 
    modelName: "gpt-3.5-turbo-0613",
    streaming: true,
    verbose: true
});

const memory = new ConversationSummaryMemory({ 
    memoryKey: "chat_history",
    llm: new OpenAI({ openAIApiKey , modelName: "gpt-3.5-turbo-0613", temperature: 0 }),
  });

  
  
  
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

  const qa = ConversationalRetrievalQAChain.fromLLM(model,retriever,{
    memory
  })

  let que = "who is janhvi? Provide her contact information"
  const result = await qa.invoke({question : que});
  console.log(result);
  await client.close();