import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

import pickle



from langchain.memory import ConversationBufferMemory



load_dotenv()
GOOGLE_API_KEY=""
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


def getpdftext(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text


def gettextchunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks


def getvectorstore(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")



def getconversationalchain():
    prompt_template =

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                                   temperature=0.3)
    memory = ConversationBufferMemory(memory_key="chat_history", return_message=True)


    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)


    return chain



def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key="")

    new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(user_question)

    chain = getconversationalchain()
    response = chain(
      {"input_documents": docs, "question": user_question}
        , return_only_outputs=True)

    print(response)
    st.write("Here's your answer : ", response["output_text"])


def get_newdb(new_db=user_input):
    return new_db


def main():
    st.set_page_config("SETU AI")
    st.title("SETU AI 🤖")
    st.header("Your Virtual Salesman")
    user_question = st.text_input("Hmm...What do you have in your mind?")

    if user_question:
        user_input(user_question)



    with st.sidebar:
        st.title("Menu:")
        pdf_docs = st.file_uploader("Upload you PDFs here!!",
                                    accept_multiple_files=True)
        if st.button("Submit and Process"):
            with st.spinner("Hmm....Let me think"):
                raw_text = getpdftext(pdf_docs)
                text_chunks = gettextchunks(raw_text)
                getvectorstore(text_chunks)


                st.success("Yuppp....Ready!!!!")

    with open("retrieval_chain.pkl", "wb") as f:
        pickle.dump(main, f)

if __name__ == "__main__":
    main()