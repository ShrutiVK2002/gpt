// // import { ChatOpenAI } from "@langchain/openai";
// // const openai = new ChatOpenAI({
// //     apiKey: "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", dangerouslyAllowBrowser:true
// //  });
// // import {
// //   ChatPromptTemplate,
// //   MessagesPlaceholder,
// // } from "@langchain/core/prompts";

// // const chatModel = new ChatOpenAI({ temperature: 0 });

// // const chatPrompt = ChatPromptTemplate.fromMessages([
// //   ["system", "You are a nice chatbot having a conversation with a human."],
// //   // The variable name here is what must align with memory
// //   new MessagesPlaceholder("chat_history"),
// //   ["human", "{question}"],
// // ]);

// // // Notice that we set `returnMessages: true` to return raw chat messages that are inserted
// // // into the MessagesPlaceholder.
// // // Additionally, note that `"chat_history"` aligns with the MessagesPlaceholder name.
// // const chatPromptMemory = new BufferMemory({
// //   memoryKey: "chat_history",
// //   returnMessages: true,
// // });

// // const chatConversationChain = new LLMChain({
// //   llm: chatModel,
// //   prompt: chatPrompt,
// //   verbose: true,
// //   memory: chatPromptMemory,
// // });

// // // Notice that we just pass in the `question` variables - `chat_history` gets populated by memory
// // await chatConversationChain.invoke({ question: "What is your name?" });
// // await chatConversationChain.invoke({ question: "What did I just ask you?" });


// import { BufferMemory } from "langchain/memory";
// import { HumanMessage, AIMessage } from "@langchain/core/messages";

// const memory = new BufferMemory();

// await memory.chatHistory.addMessage(new HumanMessage("Hi!"));
// await memory.chatHistory.addMessage(new AIMessage("What's up?"));


// import { ChatOpenAI } from "@langchain/openai";
// //  Use the ChatOpenAI variable somewhere in your code
// const chatModel = new OpenAI({
//     apiKey: "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", dangerouslyAllowBrowser:true
//  });

//  await chatModel.invoke("what is LangSmith?");

 