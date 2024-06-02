import{ MemoryVectorStore} from  "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Page } from "openai/pagination";

const openAIApiKey = "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";

const vectorstores = await MemoryVectorStore.fromDocuments(
    Page,
    new OpenAIEmbeddings({openAIApiKey})
    );
    
    const resultOne = await vectorstores.similaritySearch("zade" , 3);
    console.log(resultOne);

