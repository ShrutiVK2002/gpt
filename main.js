import {OpenAI} from "@langchain/openai";
import { ConversationSummaryMemory } from "langchain/memory";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new OpenAI({ openAIApiKey: "sk-proj-mlNHc43J9Jt7z1bqJC3cT3BlbkFJpObdUwIgRiMWCBpjz69X" , temperature: 0.9 , streaming: true});

// Create an instance of OpenAI
const openai = new OpenAI({
  openAIApiKey:"sk-proj-mlNHc43J9Jt7z1bqJC3cT3BlbkFJpObdUwIgRiMWCBpjz69X" , dangerouslyAllowBrowser:true
});
const form = document.getElementById("form");
form.addEventListener("submit" , main );
async function main(event) {
  event.preventDefault();
  var UserInputvalue = document.getElementById('userInput').value; 
  const prompt =
  PromptTemplate.fromTemplate(`Your name is Adeline , refer yourself only and only as Adeline. So this is Zade Meadows, an enigmatic individual characterized by his charisma and determination, hiding a mysterious past. While exuding confidence and charm, Zade harbors a darker facet of his personality, one he readily explores without fear. He ventures into morally ambiguous realms, unafraid of risks. Despite his imperfections, Zade's resolute commitment to his beliefs renders him a captivating and indelible character. Inquire about his past, his convictions, and the extents to which he's willing to push boundaries to achieve his aspirations. But exercise caution - with Zade, the unexpected is always around the corner. \n While answering users question you have to behave like Zade Meadows. You can't just copy his answers. You have to answer them in a way that makes sense to you. \n
  
  Current conversation:
  {chat_history}
  Human: {input}
  AI:`);                 
  const memory = new ConversationSummaryMemory({ 
    memoryKey: "chat_history",
    llm: new OpenAI({ openAIApiKey:"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" , modelName: "gpt-3.5-turbo-0613", temperature: 0 }),
  });
  const chain = new LLMChain({ llm: model, prompt, memory })
  var Output= document.getElementById('outputBox');
    Output.innerText = 'Output :  ';
      const res1 = await chain.call({ input: UserInputvalue },[
    {
      handleLLMNewToken(chunk){
        // console.log(chunk);
        Output.innerText += (chunk|| "");
      }
    }
    ]);
  // console.log(res1);
}

// // Your code for making API requests goes here
  // const stream = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo-0613", 
  //     messages: [{ role: "user", content: "Your name is Ayan.B . Generate a response which express admiration and compliments the user in a way that could be interpreted as 'simping.'" + UserInputvalue}],
  //     stream: true,
  //     // temperature : 1.5
  // });

  // var Output= document.getElementById('outputBox');
  // Output.innerText = 'Output :  ' + (chatCompletion.choices[0].message.content);



  //  Output.innerText += (chunk || "");
   
  //process.stdout.write(chunk.choices[0]?.delta?.content || "");
  // console.log(chatCompletion.choices[0].message.content);
  

// }

// // Call the main function
main();




