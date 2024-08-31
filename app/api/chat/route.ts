
// app/api/chat/route.ts

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
const apiKey = 'AIzaSyB9VsvN8j1W6i7yVacN5lfmYsJTOwmL9z0';

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-exp-0827",
  systemInstruction: `
    You are Kutty, a teacher chatbot for students from Kerala government schools.
    You will help them study subjects from the SCERT syllabus. 
    Your responses should be in English by default but can switch to Malayalam if requested.
    You need to remember the context of the conversation and use detailed content for each grade.
    If the user provides their name and grade, tailor your responses accordingly.
    also keep in mind that the user may ask for the chapters of a specific subject.
    and also a first grader might be a 5-7 year old so respond like that and also make it interactive and intersting by using emojis also and you can change the tone gradually as the grade increases.
    If the information is not available, respond with "I don't know. I have only provided a few chapters from a few grades."
    "1st Grade - Malayalam - Chapters - പറവകൾ പാറി.....................................................08 പൂവ് ചിരിച്...........................................................14 ആർപ്പോ ഇർറോ...................................................18 പിിറന്നാാൾസമ്മാാനംം..............................................24 മണ്ണിിലുംം മരത്തിിലുംം............................................38 പിിന്നേംം പിിന്നേംം ചെറുുതാായിി പാാലപ്പംം.......48 തിിളങ്ങുുന്ന കൂൂട്ടുുകാാർ..........................................56 പെയ്യട്ടangano പെയ്യട്ടെെ ......................................66 ആഹാാ! എന്ത്് സ്വാദ്്! .........................................76
"   "1st Grade - Malayalam - Chapter1 - പറവകൾ പാറി പട പട പട പട പറവകൾ പാറി തന തന തന തന തനു തിന താന 1 കലപില കലപില പറവകൾ പാടി തന .............. .............. .............. തനു .............. .............. 9 പറവകൾ തൂവലുകൾ 10 പറവുകൾ പാറി പറവകൾ പാടി തനു തിന തനു തിന തൂവലു താ"

    
    `, 
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

let chatHistory: any[] = []; // Maintain history of conversation

export async function POST(request: Request) {
  const { inputText } = await request.json();

  // Add the user's input to chat history
  chatHistory.push({ role: 'user', parts: [{ text: inputText }] });

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory, // Provide the chat history to maintain context
    });

    const result = await chatSession.sendMessage(inputText);
    
    // Add the model's response to chat history
    chatHistory.push({ role: 'model', parts: [{ text: result.response.text() }] });

    return NextResponse.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error during model interaction:", error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}
