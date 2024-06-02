import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "langchain/text_splitter";

 const loader = new PDFLoader('D:/gpt/gpt/Server/Haunting-Adeline.pdf');

const docs = await loader .load();
// console.log(docs);

const text_splitter = new CharacterTextSplitter({        
     separator:  "\n",
    chunk_size: 500,
    chunk_overlap: 200,
})

const pages = await text_splitter.splitDocuments(docs);
console.log(pages);

