import { OpenAI} from 'openai';

 const openai = new OpenAI({
   apiKey: "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",  dangerouslyAllowBrowser: true// This is the default and can be omitted
 });
 var userInputValue = document.getElementById('userInput').value;

  
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Give Sarcastic Replies only and act like a angry person. your name is RedOnian\n'+userInputValue}],
        model: 'gpt-3.5-turbo-instruct',
        temperature: 1,
        stream: true
    });
    var outputBox = document.getElementById('outputBox');
       outputBox.innerText = 'Output: ' 