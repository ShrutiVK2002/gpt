import { OpenAI } from "@langchain/openai";
import { ConversationSummaryMemory } from "langchain/memory";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new OpenAI({ openAIApiKey: "sk-proj-mlNHc43J9Jt7z1bqJC3cT3BlbkFJpObdUwIgRiMWCBpjz69X" , temperature: 0.9 , streaming: true });
export const run = async () => {
    const memory = new ConversationSummaryMemory({ 
      memoryKey: "chat_history",
      llm: model,
    });
  
    const prompt = PromptTemplate.fromTemplate(`The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.
  
    Current conversation:
    {chat_history}
    Human: {input}
    AI:`);
    const chain = new LLMChain({ llm:model, prompt, memory  });
   
    const res1 = await chain.call({ input: "Hey I'm kookie." },[
      {
        handleLLMNewToken(chunk){
          console.log(chunk);
        }
      },
      {
        handleLLMEnd(){
          console.log('started');
        }
      }
    ]);
    console.log(res1);
  //  console.log({ res1, memory: await memory.loadMemoryVariables({}) });
    // const res2 = await chain.call({ input: "What is Langchain ?" });
    // console.log({ res2, memory: await memory.loadMemoryVariables({}) });
    // const res3 = await chain.call({ input: "What is Embbeding ?" });
    // console.log({ res3, memory: await memory.loadMemoryVariables({}) });
    // const res4 = await chain.call({ input: "What is chatGPT ?" });
    // console.log({ res4, memory: await memory.loadMemoryVariables({}) });
    // const res5 = await chain.call({ input: "What is my name ?" });
    // console.log({ res5, memory: await memory.loadMemoryVariables({}) });
};
run();


// [{
    //   handleLLMNewToken(chunks){
    //     console.log(chunks);
    //   }
    // }]);
    