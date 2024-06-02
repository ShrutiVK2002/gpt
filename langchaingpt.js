import { ChatOpenAI } from "@langchain/openai";
 import { ConversationSummaryBufferMemory } from "langchain/memory";
 import { ConversationChain } from "langchain/chains";
 import {
    ChatPromptTemplate,
    MessagesPlaceholder,
    } from "@langchain/core/prompts";

// const chatModel = new ChatOpenAI({
//   openAIApiKey: "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"
// });

const memory = new ConversationSummaryBufferMemory({
    llm: new ChatOpenAI({openAIApiKey: "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" , 
    modelName: "gpt-3.5-turbo-instruct", temperature: 0 }),
    maxTokenLimit: 200,
    returnMessages: true
  });

  const chatPrompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Hello",
    ],
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
  ]);

const model = new ChatOpenAI({ openAIApiKey: "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" ,
temperature: 0, verbose: true });
const chain = new ConversationChain({
  llm: model,
  memory: memory,
  prompt: chatPrompt,
});

const res1 = await chain.invoke({ input: "Hi, My name is Kookie" });
console.log({ res1, memory: await memory.loadMemoryVariables({}) });
//  const res2 = await chain.invoke({ input: " What is BTS?" });
//  console.log({ res2});
// const res3 = await chain.invoke({ input: "tell me about BTS members? " });
// console.log({ res3 });
const res4 = await chain.invoke({ input: "what is langchain?" });
console.log({ res4 , memory: await memory.loadMemoryVariables({}) });
 const res5 = await chain.invoke({ input: "what is vector store?" });
 console.log({ res5 , memory: await memory.loadMemoryVariables({}) });
const res6 = await chain.invoke({ input: "what is  my name ?" });
console.log({ res6 , memory: await memory.loadMemoryVariables({}) });


  
//  var abc = await chain.invoke("what do you think about BTS?");
//  console.log(abc.content);
