
// app/api/chat/route.ts

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
const apiKey = 'AIzaSyD9e166K2JLrsj3k7dyReWoSMKPZEjvxbU';

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
    Grade – 1 – Malayalam – Chapter – 3

3 ആർപ്്പപോ ഇർറോോ ആർപ്്പപോ ഇർറോോ ഇർറോോ ഇർറോോ ആർപ്്പപോ ഇർറോോ ഇർറോോ ഇർറോോ ഓടിവരൂ പാടിവരൂ കൂടെവരൂ കൂട്ടരേ ആർപ്്പപോ ഇർറോോ .................. .................. അപ്്പപോോം ചുട്ട് അടേം ചുട്ട് ഇലേം വാട്ടി പൊൊതീം കെട്ടി പടീം കടന്ന് അതിലേ പോോയ് ഇതിലേ പോോയ് കിളികിളി കിക്കിളി വേറെ കളിപ്പാട്ടുകൾ അറിയാമോോ ? കളിയരങ്ങ് 19 മാനത്ത് പട്ടം പട്ടം മാനത്ത് പട്ടം വീട് കണ്ടു കാട് കണ്ടു വണ്ടി കണ്ടു പട്ടം പറന്നു ................കണ്ടു ......................... പട്ടം പറന്നു 20 പൂമല കണ്ടു പൂമരം കണ്ടു പുഴ കണ്ടു വഴി കണ്ടു പട്ടം പറന്നു 21 കളിയരങ്ങ് അറിയാമോോ? പറയാമോോ? കളിയുടെ പേരുകൾ പറയാമോോ? അറിയാമേ പറയാമേ കളിയുടെ പേരുകൾ പറയാമേ. പാവകളിക്കൽ, തൊൊട്ടുകളിക്കൽ ഓടിക്കളിയും കളിയാണേ. അറിയാമേ പറയാമേ ........................ പേരുകൾ പറയാമേ. പാടിക്കളി ചാടിക്കളി പിന്നെ ............................. ............................. 22 മരമേ മരമേ പുന്നാരേ തരുമോോ കൊൊച്ചുകളിപ്പാട്ടം? പന്ത് വേണോോ? പാവ വേണോോ? പമ്പരം വേണോോ? പറഞ്്ഞഞോളു. വേണം വേണം വേണം ഓലകൊൊണ്്ടടൊരു പീപ്പി, ഓലപ്പീപ്പി ഓലകൊൊണ്്ടടൊരു പന്ത്, ഓലപ്പന്ത് .............................................. ....................…

Grade – 2 – English – Chapter – 1

Bruno, the Puppy 8 8 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy Look at the picture. What is the boy doing? Will the pup bring the ball back? ‘Bruno, go and fetch the ball!’ Sachin called out to his puppy. Bruno rushed towards the ball. He came back with the ball. He wagged his tail. ‘Well done Bruno! You are my best friend. Come, let's go.’ Sachin hugged Bruno. Do you play with your pet? Name some games you play with your pet. 9 UNIT 1 Bruno, the Puppy Bruno, the Puppy You can see Bruno running to the gate. Why is Bruno running to the gate? ‘What’s that sound? Oh! A fish seller!’ Bruno ran towards the gate. ‘The gate is open!’ Sachin ran after Bruno. ‘Bruno, Bruno, don’t go out!’ Sachin shouted. But Bruno ran out of the gate. Sachin became sad. ‘Father...’ Sachin called out. What will Sachin do now? Will his father help Sachin? 10 10 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy What is Sachin asking the woman? ‘Did you see my puppy?’ Sachin asked a woman on the street. ‘Yes, I just saw one running to the park,’ said the woman. ‘Where is the park?’ ‘It’s not far from here. Go straight, it’s near the bus stand,’ said the woman pointing to the park. ‘Thank you.’ Sachin and his father hurried to the park. Will Sachin and his father find Bruno in the park? Have you ever been to a park? What do you see in a park? 11 UNIT 1 1 Bruno, the Puppy Bruno, the Puppy What will Bruno do in the park? ‘What a nice place!’ Bruno ran around the park. He sat on the swing. The swing moved to and fro. He jumped down from the swing. ‘Wow! A slide! He climbed up and slid down. He rolled on the grass.‘Hi! A climber!’ He climbed up . Bruno then jumped onto a bench. ‘Go away,’ shouted a boy. Bruno ran off. Do you like playing in the park? Which rides and games do you like to play in a park? 12 12 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy Will Sachin find Bruno? Sachin and his father couldn’t find Bruno anywhere. ‘Did you see a puppy?’ Sachin asked a boy. ‘Is it a white puppy with black spots?’ the boy asked. ‘Yes,which way did it go?’ ‘That way, to the right,’ said the boy pointing to a shop. Who did Sachin and his father meet? What did they ask? Where is Bruno now? 13 UNIT 1 Bruno, the Puppy Bruno, the Puppy Bruno is going after someone. Who is he? What is Bruno jumping at? ‘Oh, how beautiful!’ Bruno looked at the balloons. The balloons were bouncing up and down. Bruno tried to catch them. ‘BANG!’ A balloon burst. ‘Bow… bow.’ Bruno ran away frightened. Why was Bruno frightened? Will Sachin meet the balloon man? KT 69-2/English-2 (Vol-1) 14 14 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy What will Sachin ask the balloon man? Why is the balloon man angry? ‘Balloon man, did you see a puppy?’ Sachin asked. ‘Was it your puppy? It burst one of my balloons.’ He looked quite angry. ‘Sorry uncle, we will pay for it.’ ‘It’s alright. I saw your puppy in front of the vegetable shop.’ ‘Where is the vegetable shop?’ Sachin asked. ‘Go straight, then turn left,’ said the balloon man. ‘Thank you uncle,’ Sachin said. Where is Bruno now? What will Bruno do in the vegetable shop? 15 UNIT 1 1 Bruno, the Puppy Bruno, the Puppy What is Bruno doing in the picture? Name the vegetables you see in the shop. Bruno ran into the vegetable shop. ‘Hi! A ball! Bruno kicked at a potato. It went under a box. Then, he jumped onto a pumpkin. It started rolling. ‘Hi! Red balls!’ He climbed on the box of tomatoes. It fell down. Tomatoes scattered all over the floor. ‘Hey, naughty dog! Get off from here.’ The vegetable seller shouted and raised a stick. Bruno ran off. What are the mischiefs done by your pet? Will Sachin and his father find Bruno? 16 16 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy What will the vegetable seller tell Sachin and his father? Did he beat Bruno? ‘The pup went away. I will kill him if it comes again. He messed up my shop.’ The vegetable seller shouted angrily. ‘Look father, he beat my Bruno.’ Sachin started crying. ‘My dear, don’t cry. We will get him back.’ Father patted him on his shoulder. ‘It’s getting late. Let’s go home.’ Why was Sachin crying? Will he get his pup back? 17 UNIT 1 1 Bruno, the Puppy Bruno, the Puppy Where is Sachin and his father now? ‘Look father! There’s our Bruno!’ Sachin ran to Bruno. Bruno jumped into Sachin’s arms. ‘You naughty pup! Where were you?’ Sachin asked. Bruno wagged its tail. ‘Come on dear.’ Sachin hugged Bruno. ‘Oh! you are so dirty! Come, let’s have a wash.’ Have you ever lost your pet? How did you get it back? Talk about it. 18 18 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy Let’s sing and enjoy! My Puppy My puppy has a doghouse, just outside my door. He licks me when I pet him, and wags his tail for more. He’s always there beside me, no matter what I do. My puppy is my special friend, and a family member too. 19 UNIT 1 1 Bruno, the Puppy Bruno, the Puppy Activity 1 Sachin wants to go to some places. He says these to Bruno. Complete what he says. Let’s go to the playground. .................................. the garden. .......................................................... ........................................................ 20 20 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy Activity 2 Look at the pictures. Sachin and Bruno are doing something. Say what they are doing and write them down. One is done for you. Sachin is patting Bruno. Bruno is wagging its tail. Sachin is ................................ Bruno is ................................. ................................................... ................................................... .................................................... .................................................... (pat/wag) (run/jump) (read/roll) (kick/sleep) 21 UNIT 1 Bruno, the Puppy BRUNO THE Bruno, the Puppy Activity 3 Sachin is in the town. He wants to go to the toy shop first. Then he would like to go to the bookstall and later to the park. But he doesn’t know how to reach these places. Give him the proper directions. One is done for you. UNIT 1 BRUNO THE Walk straight. Turn left. Go straight. You will reach the toy shop. ................................................ ................................................ ................................................ You will reach the bookstall. ................................................ ................................................ ................................................ ................................................ ................................................ 22 22 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy Activity 4 Look at the pictures. Write a sentence each about the pictures. One set is done for you. There is a carrot on the plate. There are some carrots in the basket. .................................................... on the swing. ................................................ on the see-saw. ............................................................. the slide. ................................................................bench. ........................................................................... ............. ............................................................. 23 UNIT 1 1 Bruno, the Puppy Bruno, the Puppy Activity 5 Sachin saw Bruno running out of the gate. Sachin tried to stop him. But he could not. He ran to his father. What will Sachin tell his father? What will his father say? Write the conversation between Sachin and his father. Sachin : Father, ...................................................................................... Father : ................................................................................................... Sachin : ................................................................................................... Father : ................................................................................................... 24 24 UNIT 1 Bruno, the Puppy UNIT 1 Bruno, the Puppy Activity 6 ‘It’s getting late. Let’s go home.’ Sachin and his father started walking home. Sachin was very sad. He thought about Bruno. What would he think about Bruno? Write the thoughts of Sachin. ............................................... ........................................................... ................................................................ ................................................................. 25 UNIT 1 Bruno, the Puppy Bruno, the Puppy Activity 7 Bruno went to the vegetable shop. Name the vegetables Bruno saw there. Some clues are given below. Its colour is orange. Rabbits like it. It is sweet. It’s round. It’s big. It looks like a football. Draw a vegetable you like. Name it and write a few sentences about it. C P ........................................................................................................................ ......................................................................................................................... .......................................................................................................................... K 

Grade – 3 – EVS – Chapter – 1

Green Earth l Root l l Let us classify Do you think all the plants you see are similar? What are the differences? l Size l l l Did you see the children who are singing and dancing? Shall we play this game? Which plants were you able to touch when you played? Which other plants do you know? Write them in your Environmental Science Diary. Which parts? Saira is drawing the picture of a plant. What are the other parts to add in the picture? Complete the picture and write the parts. 8 Which plants do you see in the picture? What are the features of their stem? What are the differences in their size? How long will they live? Mark your observations with a tick () in the table. Observe the plants in the School Biodiversity Garden and complete the table given. Name of the plant Stem Size How long will it live? Soft Hard Very Hard Small Big Very big Months Years Many years Spinach (Cheera)    Hibiscus(Chemparathi)    Mango tree    9 Do you know us? We grow very tall. We are trees. Please write down our features. l Very hard stem. l ........................................................ Though we are small, our stems are pretty hard... We are called shrubs. Write down our features. l Hard stem. l ........................................................ I and my friends are herbs. Can you write down our features? l Stem is soft. l ................................................... l No deep roots. What did you learn from the table? 10 Who else belongs to the group of spinach, hibiscus and mango tree? Herb Shrub Tree Spinach Hibiscus Mango tree Draw and connect Herb Shrub Tree 11 Vine plants Friends, we are vine plants.. We too are here. What are the features of these plants? Let us write. l Spreads like a creeper l Cannot stand up alone. l l Plants in water Plants that grow in water are water plants. What are the features of these plants? Let us write. Find out more water plants and note them down. Vine plants are of two types: Those that spread and grow along the ground, and those that grow upwards by holding on to or by spreading along a support. Observe your surroundings. Find and note down more examples for vine plants. 12 Wow, light around! I am above the soil. Have you seen seeds germinating? Let us germinate a seed. Fill a transparent glass with sand. Plant three or four pea seeds slightly under the sand close to the glass. Wet the sand. Keep it for a few days. Observe the seed germinating. What changes can you see? Which part of the seed will germinate first? How many days will it take for the first leaf to sprout? Observe, discuss your findings with friends, and write them down in your Environmental Science Diary. Draw pictures too. My Plant Germinate a seed in your home. You should plant the seed where there is light. When the seed germinates and the plant grows, give it the manure needed. You will observe more leaves sprouting in the plant, the stem growing, flowers and fruits appearing. Prepare an activity report like the sample given, along with pictures. Life inside the seed My plant Activity report l The seed type : l The date of planting : l The date of germination : l The date of the first sprout : l The date of two leaves appearing : l The changes in the plant in seven days Height : Thickness : Number of leaves : l The date of flowering : l The date of fruit appearing : • .............................................................. : 13 Plants not only from seeds But the saplings of the miracle leaf plant (ilamulachi) are formed from their leaves. Saira and her friends decided to plant Chethi, Hibiscus, Nishagandhi, Rose, Pumpkin, Mango tree, Jasmine and Kadaplavu for expanding the School Biodiversity Garden. Classify these plants according to which part of them is planted. Find out more plants in these categories. l Seed : l Root : l Stem : l Leaf : See the saplings. They are formed from the root of the curry leaf plant. 14 Why does a plant have different parts? Are all the parts important? Place three test tubes in a stand. Fill the first test tube with water. Fill the second test tube with red colour water in the same amount. Keep the third test tube without water. Keep three clearweed plants (mashithandu) of the same size and undamaged roots in sunlight for 10 minutes, and then keep them in separate test tubes. Keep the test tubes in a place where they can get sunlight. Observe the changes happening to the plants and the water in the test tubes. What changes can you see? What happened to the plant in the test tube without water? What is the reason? How did the colour of the plant's stem in the second test tube change? What is the role of the root in this change? Write your findings as an experiment note in your Environmental Science Diary. 

 Grade – 4 – English – Chapter – 1

Unit 1 THE SEED OF TRUTH 8 Unit at a Glance The Seed of Truth Prose The Seed of Truth (Indian folk tale retold by Sudha Murthy) Poems ï Seeds ï Oats, Peas, Beans, and Barley Learning Outcomes By learning this unit, the learner will be able to: ï read and comprehend a story. ï use simple English for answering interaction questions. ï answer simple questions starting with words like 'who', 'what', 'where', etc. ï identify contracted forms of do not, did not, let us, etc. ï read and understand words like 'successor', 'disappointment', 'fond', 'distribute', 'tending', 'kingdom' etc. in meaningful contexts. ï read and appreciate a poem. ï identify rhyming words in a poem. ï develop discourses like conversation, thoughts, notice, etc. ï sequence the events of a story. ï complete the word ladder with familiar words. ï match pictures with action words by drawing lines. ï conduct simple project works. 9 Look at this picture. What kind of a place do you like - a place like this or a place full of trees? What happened to the trees? Who is responsible for this? How can we make our earth more green? Let’s begin by drawing branches, twigs and leaves. Then colour the picture. Now, read the story of a king who loved plants and trees. 10 The Worry Vidyadhara was the king of Gandhara. He was a just and wise king. The king was fond of gardening. He spent a lot of time tending his garden, planting the finest plants, fruit trees, vegetables and crops. His people were very happy. The king did not have children. As the king grew older, everyone got more and more worried. Who would take over the kingdom after him? What was the hobby of the king? ‘The king did not have any children.’ What will happen to the kingdom? How will the king find his successor? 11 A Proclamation To find a successor, the king thought of an idea. He decided, ‘I will distribute some seeds to all the children in the country. The child who grows the biggest, healthiest plant will become the prince or the princess. They can take three months for it.’ The king ordered his minister to give a proclamation. Why did the king choose such a test to find his successor? 12 Seed of Hope The next day, a long line of anxious parents and children formed outside the palace. Everyone was eager to get a seed and grow the best plant. Pingala, a poor farmer’s son, was one among these children. He too got a seed from the king and sowed it in a pot in his garden. He took great care of the seed. How many days will it take for a seed to sprout? What care will you give to grow a seed into a plant? 13 The Disappointment Pingala watered and manured the seed. But the seed did not sprout. Pingala changed the soil and transferred the seed to another pot. Weeks and months passed. One day Pingala went near the pot. He knelt before it. ‘Dear seed, three months have passed. I want to take you to the palace. Please sprout out by tomorrow.’ But nothing happened. The next day he saw children walking to the palace, dressed in their best clothes. They all held well-grown plants. Pingala stood watching them sadly. Will Pingala go to the palace? What will be his thoughts? KT 77-2/English-4 Vol-1 

Grade – 9 – Chemistry(Malyalam)- Chapter 1 -


ഓരോ പദാര്‍ഥത്തിന്റെ തന്മാത്രയിലും ആറ്റങ്ങള്‍ ഒരു പ്രത്യേക അനുപാ
തത്തില്‍ ചേര്‍ന്നിരിക്കുന്നുവെന്ന്‌ കണ്ടല്ലോ. ഒരു പദാര്‍ഥത്തിന്റെ എല്ലാ
ഗുണങ്ങളുമുള്ളതും സ്വതന്ത്രാവസ്ഥയില്‍ നിലനില്‍ക്കാന്‍ കഴിയുന്നതുമായ
ഏറ്റവും ചെറിയ കണികയാണ്‌ തന്മാത്ര.

വിവിധ പദാര്‍ഥങ്ങളിലെ തന്മാത്രകള്‍ എങ്ങനെയെല്ലാം വ്ൃത്യാസപ്പെട്ടിരി
ക്കുന്നു?

൫ തന്മാത്രയിലടങ്ങിയിരിക്കുന്ന ഘടക മൂലകങ്ങള്‍

൫ ഘടക മൂലക ആറ്റങ്ങളുടെ എണ്ണത്തിന്റെ അനുപാതം
തന്മാത്രകള്‍ നിര്‍മ്മിച്ചിരിക്കുന്നത്‌ ആറ്റങ്ങള്‍ കൊണ്ടാണെന്നു മനസ്സിലാ
യല്ലോ?
ആറ്റങ്ങളില്‍ അവയേക്കാള്‍ ചെറിയ കണങ്ങള്‍ അടങ്ങിയിരിക്കുന്നുവെന്ന്‌
നിങ്ങള്‍ പഠിച്ചിട്ടുണ്ട്‌. ആറ്റങ്ങളില്‍ അടങ്ങിയിരിക്കുന്ന പ്രധാന കണങ്ങള്‍
ഏതൊക്കെയാണെന്ന്‌ അറിയാമോ?

൫ ഇലക്ലോണ്‍

ഇവ സബ്്‌അറ്റോമിക കണങ്ങള്‍ എന്നറിയപ്പെടുന്നു. ഈ കണങ്ങളെക്കു
റിച്ച്‌ കൂടുതല്‍ കാര്യങ്ങള്‍ ഈ യൂണിറ്റില്‍ പരിചയപ്പെടാം.

ഡിസ്ചാര്‍ജ്‌ ട്യൂബ്‌ പരീക്ഷണങ്ങളും ഇലക്ലോണിനെ
കണ്ടെത്തലും

1875-ല്‍ വില്യം ക്രൂക്‌സ്‌ ("7/൩ ൩൧൦1൭൭), എന്ന ഭഥതികശാസ്ത്രജ്ഞന്‍
ഇരുവശത്തും ലോഹത്തകിടുകള്‍ (ഇലക്ലോഡുകള്‍) സ്ഥാപിച്ച ഒരു ഗ്ലാസ്‌
ട്യൂബിലൂടെ (ചിത്രം 1.1) ഉയര്‍ന്ന വോള്‍ട്ടതയില്‍ വൈദ്യുതി കടത്തി
വിട്ടുള്ള പരീക്ഷണങ്ങള്‍ നടത്തി.

ഡിസ്ചാര്‍ജ്‌ ട്യൂബ്‌ കുറഞ്ഞ മര്‍ദത്തിലുള്ള ഇളംപച്ച നിറത്തിലുള്ള
വായു, തിളക്കം
| [|
ഃ ന ച
ലാലി.
നം
കാഥ്ഥാഡ്‌ രശ്മികള്‍

കാഥോഡ്‌ നി ആനോഡ്‌

ഉയര്‍ന്ന വോള്‍ട്ടത

ഡിസ്ചാര്‍ജ്‌ ട്യൂബ്‌
വായു ഒരു വിദ്യുത്രോധി (1൩07) ആയതിനാല്‍ സാധാരണമര്‍ദത്തില്‍
ട്യൂബിലെ വായുവിലൂടെ വൈദ്യുതി കടന്നുപോകുന്നില്ല. എന്നാല്‍ വായു യൂണിറ്റ്‌ 1 : ആറ്റത്തിന്റെ ഘടന

ഘട്ടം ഘട്ടമായി നീക്കം ചെയ്ത്‌ മര്‍ദം വളരെയധികം കുറയ്ക്കുമ്പോള്‍
ട്യൂബിലൂടെ വൈദ്യുതി കടന്നുപോകുന്നതായി (വൈദ്യുത ഡിസ്ചാര്‍ജ്‌ ഉണ്ടാകു
ന്നതായി) കണ്ടു. സുഷിരങ്ങളുള്ള പോസിറ്റിവ്‌ ഇലക്ലോഡ്‌ (ആനോഡ്‌ ഉപയോ
ഗിച്ചാല്‍ അതിന്‌ പുറകിലുള്ള സിങ്ക്‌ സള്‍ഫൈഡ്‌ (228) പൂശിയിരിക്കുന്ന ഗ്ലാസ്‌
ഭിത്തിയില്‍ ഇളംപച്ച നിറമുള്ള ഒരു തിളക്കം ഉണ്ടാകുന്നതായി കണ്ടു.
കാഥോഡില്‍ നിന്ന്‌ പുറപ്പെടുന്ന രശ്മികളാണ്‌ തിളക്കത്തിന്‌ കാരണം. ഈ
രശ്മികള്‍ കാഥോഡ്‌ രശ്മികള്‍ (6൨൦0൦ അഭ) എന്നറിയപ്പെട്ടു. കാഥോഡ്‌
രശ്മികളെക്കുറിച്ച്‌ ശാസ്ത്രജ്ഞര്‍ കൂടുതല്‍ പരീക്ഷണങ്ങള്‍ നടത്തുകയും
അവയുടെ വിവിധ സവിശേഷതകള്‍ കണ്ടെത്തുകയും ചെയ്തു.

കാഥോഡ്‌ രശ്മികളുടെ കണ്ടെത്തല്‍

മര്‍ദം കുറയുമ്പോള്‍ വാതകങ്ങളില്‍ക്കൂടി വൈദ്യുതി കടന്നു പോകുമെന്ന്‌ പത്തൊമ്പതാം
നൂറ്റാണ്ടിന്റെ ആദ്യപകുതിയില്‍ തന്നെ കണ്ടെത്തിയിരുന്നു. കുറഞ്ഞ മര്‍ദത്തില്‍ വാതകങ്ങ
ളില്‍ കൂടി വൈദ്യുതി കടന്നു പോകുമ്പോള്‍ ഉണ്ടാകുന്ന മാറ്റങ്ങള്‍ മൈക്കല്‍ ഫാരഡെ പഠിക്കുകയു
ണ്ടായി. പക്ഷേ കാര്യക്ഷമമായ നിര്‍വാത പമ്പുകള്‍ (500൩ ധന്ബാട) ഇല്ലാതിരുന്നതും വായു നിക്കം
ചെയ്ത ഗ്ലാസ്സ്‌ ട്യൂബുകള്‍ ക്രമീകരിക്കുന്നതിലെ ബുദ്ധിമുട്ടും പഠനങ്ങള്‍ ശ്രമകരമാക്കി.

1854-ല്‍ ഹെന്‍റിച്ച്‌ ഗീസ്പര്‍ ഡിസ്ചാര്‍ജ്‌ ട്യൂബുകളും നിര്‍വാത പമ്പുകളും വികസിപ്പിച്ചെടുത്തു.
മെച്ചപ്പെട്ട ഗീസ്ൂര്‍ ട്യൂബുകള്‍ ലഭ്യമായതോടെ ജൂലിയസ്‌ പ്ലക്കര്‍ അതുപയോഗിച്ച്‌ നിരവധി പരീ
ക്ഷണങ്ങള്‍ നടത്തി. വൈദ്യുതി കടത്തിവിടുമ്പോള്‍ ട്യൂബിലെ കാഥോഡിന്‌ എതിര്‍വശത്താ
യി ഒരു ദീപ്ലി ഉണ്ടാകുന്നുവെന്നും കാന്തത്തിന്റെ സാന്നിദ്ധ്യത്തില്‍ ഈ തിളക്കത്തിന്റെ സ്ഥാനം
മാറ്റാമെന്നും അദ്ദേഹം കണ്ടെത്തി.

ജോഹാന്‍ വില്യം ഹിറ്റോര്‍ഫ്‌ (1869), ഒയ്ഗന്‍ ഗോള്‍ഡ്‌സ്റ്റൈന്‍ (1876) എന്നീ ശാസ്ത്രജ്ഞര്‍ ഈ പരി
ക്ഷണങ്ങള്‍ തുടര്‍ന്ന്‌ നടത്തി. കാഥോഡില്‍ നിന്ന്‌ പുറപ്പെടുന്ന ഏതോ രശ്മികളാണ്‌ തിളക്കത്തിനു
കാരണമാകുന്നതെന്ന്‌ അവര്‍ കണ്ടെത്തി.

കാഥോഡ്‌ രശ്മികളുടെ പ്രധാന സവിശേഷതകള്‍

കാഥോഡ്‌
൭൫ കാഥോഡ്‌ രശ്മികളുടെ പാതയില്‍ അതാര്യ വസ്തു ട്‌ ധാ ക ട)
ക്കള്‍ വെച്ചാല്‍ നിഴല്‍ ഉണ്ടാകുന്നു. ഇതില്‍നിന്നും ലം ല്‌ 7
കാഥോഡ്‌ രശ്മികള്‍ നേര്‍രേഖയിലാണ്‌ സഞ്ചരി ൧
ക്കുന്നതെന്ന്‌ ബോധ്യപ്പെട്ടു (ചിത്രം 1.2). ല്‌ ല്‌ നാഡിന്റെ നിഴല്‍
൭൫ കാഥോഡ്‌ രശ്മികളുടെ പാതയില്‍ നേര്‍ത്ത ഇത ചിത്രം 1.2
ളുകളുള്ള ചക്രം (2൭01൦൪൯൦൦1) വെച്ചാല്‍ അത്‌ നേര്‍ത്ത ഇതുജുകള്‍ ഉള്ള ചക്രം
കറങ്ങുന്നു. ഇതില്‍ നിന്നും കാഥോഡ്‌ രശ്മികളി നന്നി
ലെ കണങ്ങള്‍ക്ക്‌ മാസ്‌ ഉണ്ടെന്നു മനസ്സിലാക്കാം ര ഴി ല്‍


൭൫ കാഥോഡ്‌ രശ്മികളുടെ പാതയുടെ ഇരുഭാഗത്തുമായി വൈദ്യുത
മണ്ഡലം പ്രയോഗിക്കുമ്പോള്‍ ഈ രശ്മികള്‍ പോസിറ്റീവ്‌ ഭാഗത്തേക്ക്‌
ആകര്‍ഷിക്കപ്പെടുന്നതായി കാണുന്നു. ഇതില്‍ നിന്നും കാഥോഡ്‌ രശ്മി 0... കാസ്‌.

ചിട കള്‍ക്ക്‌ നെഗറ്റീവ്‌ ചാര്‍ജ്‌ ഉണ്ടെന്നു മനസ്സിലാ

മട്ടി
ക്‌ ആയോഗ്‌ ക്കാം (ചിത്രം 1.4).
[നി ൫ കാന്തിക മണ്ഡലത്തിലും ഇവയുടെ പാതയ്ക്ക്‌
വ്യതിയാനം സംഭവിക്കുന്നു.
ട്യൂബിനുള്ളിലെ വാതകത്തെയോ ഇലക്കലോ
ചിത്രം 1.4 ഡുകള്‍ നിര്‍മ്മിച്ചിരിക്കുന്ന ലോഹത്തെയോ മാറ്റി
യാല്‍ ഈ രശ്മികളുടെ സ്വഭാവത്തില്‍ മാറ്റങ്ങള്‍
ഉണ്ടാകുന്നില്ല. അതായത്‌ കാഥോഡ്‌ രശ്മികളിലെ കണികകള്‍ എല്ലാ പദാര്‍ഥ
ങ്ങളിലും അടങ്ങിയിരിക്കുന്നു. ഈ കണികകളാണ്‌ ഇലക്ലോണുകള്‍. ഇലക്ലോ
ണുകളുടെ ചാര്‍ജും മാസും തമ്മിലുള്ള അനുപാതം (6൩00) കണ്ടെത്തിയത്‌
ജെ. ജെ. തോംസണ്‍ (1. 1. 11൨0൩50൩) ആണ്‌. കാഥോഡ്‌ രശ്മികളെ
ക്കുറിച്ച്‌ തോംസണ്‍ നടത്തിയ പഠനങ്ങള്‍ ശാസ്ത്രലോകം അംഗീകരിച്ച
പ്പോള്‍ ആറ്റത്തെക്കാള്‍ ചെറിയ കണികകള്‍ ഉണ്ടെന്ന്‌ തെളിഞ്ഞു.
ഡിസ്ചാര്‍ജ്‌ ട്യൂബ്‌ പരീക്ഷണങ്ങള്‍ക്കും തുടര്‍ന്നുള്ള കണ്ടുപിടിത്തങ്ങള്‍
ക്കുമായി 1906-ല്‍ ഭാതികശാസ്ത്രത്തിനുള്ള നൊബേല്‍ സമ്മാനം
അദ്ദേഹം നേടി.

ഇലക്ലോണിന്റെ
മാസ്‌
ഇലക്ലോണിന്റെ 6/൩ അനുപാതം റ
1.76 ൨10 വിശു ആണ്‌. എന്നാല്‍ ഉ

ചാര്‍ജും മാസും വെവ്വേറെ കണ്ടെ
ത്തുന്നതില്‍ ജെ. ജെ. തോംസണ്‍
വിജയിച്ചില്ല. പിന്നീട്‌ റോബര്‍ട്ട്‌
മില്ലിക്കണ്‍ തന്റെ പ്രശസ്തമായ
ഓയില്‍ ഡ്രോപ്പ്‌ പരീക്ഷണത്തി
ലൂടെ ഇലക്ലോണിന്‌ 1.10
നെഗറ്റീവ്‌ ചാര്‍ജ്‌ ഉണ്ടെന്ന്‌ കണ്ടെ
ത്തുകയും ഇതില്‍ നിന്ന്‌ ഇല
ക്ലോണിന്റെ മാസ്‌ 9.1 24 101
ആണെന്ന്‌ കണക്കാക്കുകയും
ചെയ്തു.

(൫ - കൂളോം)

പ്രോട്ടോണ്‍

1886-ല്‍ ഒയ്ഗന്‍ ഗോള്‍ഡ്സ്റ്റൈന്‍ (12൩ 016560) എന്ന ജര്‍
മ്മന്‍ ശാസ്ത്രജ്ഞന്‍ സുഷിരങ്ങളുള്ള കാഥോഡ്‌ ഉപയോഗിച്ച്‌
ഡിസ്ചാര്‍ജ്‌ ട്യൂബ്‌ പരീക്ഷണങ്ങള്‍ നടത്തിയപ്പോഴാണ്‌
കനാല്‍ രശ്മികള്‍ എന്നറിയപ്പെടുന്ന രശ്മികള്‍ കണ്ടെത്തിയത്‌.
ഇവ പോസിറ്റീവ്‌ ഭാഗത്തുള്ള ലോഹത്തകിടില്‍ (ആനോഡില്‍
നിന്ന്‌ പുറപ്പെടുന്നതിനാല്‍ ആനോഡ്‌ രശ്മികള്‍ എന്നറിയപ്പെട്ടു.
ഗോള്‍ഡ്‌സ്റ്റൈന്‍ ഈ രശ്മികളുടെ സവിശേഷതകള്‍ പഠിച്ച്‌

അവയില്‍ പോസിറ്റീവ്‌ ചാര്‍ജിന്റെ സാന്നിധ്യം തിരിച്ചറിഞ്ഞു.
ഡിസ്ചാര്‍ജ്‌ ട്യൂബില്‍ ഉപയോഗിക്കുന്ന വാതകങ്ങളുടെ സ്വഭാവമനുസരിച്ച്‌ ഈ
കനാല്‍ രശ്മികളുടെ സ്വഭാവത്തില്‍ വൃത്യാസമുണ്ടാകുന്നു. ഹൈഡ്രജന്‍ വാതകം
നിറച്ച ഡിസ്ചാര്‍ജ്‌ ട്യൂബില്‍ പരീക്ഷണം നടത്തിയപ്പോള്‍ ഉണ്ടായ കനാല്‍ രശ്മി
കളിലെ പോസിറ്റീവ്‌ കണങ്ങള്‍ ഏറ്റവും ചെറുതും ഭാരം കുറഞ്ഞതുമാണെന്ന്‌
കണ്ടെത്തി. ഇത്‌ ഒരു സബ്‌അറ്റോമിക കണമാണെന്നു കണ്ടെത്തി
യതും പ്രോട്ടോണ്‍ എന്ന പേര്‌ നല്‍കിയതും ഏണസ്റ്റ്‌ റഥര്‍ഫോര്‍ഡ്‌ (12൩65
1ധഥ൦ബ7) ആണ്‌.

ആറ്റത്തിന്റെ പ്ലം പുഡിങ്‌ മാതൃക

ആറ്റത്തില്‍ നെഗറ്റീവ്‌ ചാര്‍ജുള്ള കണങ്ങളുടെ സാന്നിധ്യം ബോധ്യ
പ്പെട്ടപ്പോള്‍ ജെ. ജെ. തോംസണ്‍ പ്ലം പുഡിങ്‌ മാതൃക അവതരിപ്പിച്ചു
പ്രിത്രം 1.5). ഇതനുസരിച്ച്‌ പോസിറ്റീവ്‌ ചാര്‍ജ്‌ ഉള്ള ഒരു ഗോളത്തില്‍
നെഗറ്റീവ്‌ ചാര്‍ജുള്ള ഇലക്ലോണുകള്‍ വിന്യസിച്ചിരിക്കുന്നു. ഗോളത്തി
ലെ ആകെ പോസിറ്റീവ്‌ ചാര്‍ജുകളുടെയും നെഗറ്റീവ്‌ ചാര്‍ജുകളുടെ
യും എണ്ണം തുല്യമായിരിക്കും. അതിനാല്‍ ആറ്റം വൈദ്യുതപരമായി
നിര്‍വിര്യമാണ്‌. എന്നാല്‍ പല പരീക്ഷണഫലങ്ങള്‍ക്കും വിശദികരണം
നല്‍കാന്‍ തോംസണ്‍ മാതൃകയ്ക്ക്‌ സാധിച്ചില്ല. അതിനാല്‍ ഈ മാതൃക
പിന്തള്ളപ്പെട്ടു.


ആറ്റത്തിന്റെ പ്ലം പുഡിങ്‌ മാതൃക

റേഡിയോ ആക്സീവത (മദന)
യുറേനിയം, തോറിയം തുടങ്ങിയ മൂലകങ്ങള്‍ സ്വയം ചില വികിരണങ്ങള്‍ (1൭0100൩5)
പുറത്തുവിടുന്ന പ്രതിഭാസമാണ്‌ റേഡിയോ ആക്സീവത. 1896-ല്‍ ഹെന്‍റി ബെക്വറലാണ്‌ ഇത്‌ കണ്ടെ
ത്തിയത്‌. പ്രധാനമായും മൂന്നുതരം കിരണങ്ങളാണ്‌ റേഡിയോ ആക്ലീവതയുടെ ഫലമായി പുറത്ത്‌
വരുന്നത്‌. പോസിറ്റീവ്‌ ചാര്‍ജും മാസുമുള്ള ആല്‍ഫാ (0) കിരണങ്ങള്‍, നെഗറ്റീവ്‌ ചാര്‍ജുള്ള ബീറ്റാ
(8) കിരണങ്ങള്‍, ചാര്‍ജും മാസും ഇല്ലാത്ത ഗാമ 00 കിരണങ്ങള്‍ എന്നിവയാണവ.

റഥര്‍ഫോര്‍ഡിന്റെ ഗോള്‍ഡ്‌ ഫോയില്‍ പരീക്ഷണം
1911-ല്‍ ഏണസ്റ്റ്‌ റഥര്‍ഫോര്‍ഡ്‌ എന്ന ശാസ്ത്രജ്ഞന്റെ നേതൃത്വത്തില്‍
ഹാന്‍സ്‌ ഗീഗര്‍ (11൧5 01൦2൦), ഏണസ്റ്റ്‌ മാസ്ഡന്‍ (1:൩801ഗ്ഷ്ടാണ) എന്നി
വര്‍ വളരെ നേര്‍ത്ത സ്വര്‍ണ്ണത്തകിടില്‍ ആല്‍ഫാ കിരണങ്ങള്‍ പതിപ്പിച്ചു
പരീക്ഷണങ്ങള്‍ നടത്തി. ഈ പരീക്ഷണങ്ങള്‍ ആറ്റത്തിന്റെ ഘടനയെക്കുറി
ച്ച്‌ കൂടുതല്‍ വ്ൃക്തത വരുത്താന്‍ സഹായിച്ചു. റേഡിയോ ആക്ലീവതയുള്ള
പദാര്‍ഥങ്ങളില്‍ നിന്ന്‌ പുറത്തുവരുന്ന, പോസിറ്റീവ്‌ ചാര്‍ജുള്ള ആല്‍ഫാ
കണങ്ങളെ ഒരു നേര്‍ത്ത സ്വര്‍ണ്ണത്തകിടില്‍ കൂടി കടത്തിവിട്ട്‌ അവയുടെ
പാതയിലുണ്ടാകുന്ന വ്യതിയാനങ്ങള്‍ കണ്ടെത്താന്‍ റഥര്‍ഫോര്‍ഡ്‌
ശ്രമിച്ചു. സ്വര്‍ണ്ണത്തകിടില്‍ നിന്ന്‌ പുറത്തു വരുന്ന ആല്‍ഫാകണങ്ങള്‍
വൃത്താകൃതിയില്‍ ക്രമീകരിച്ച ഒരു ഫോട്ടോഗ്രാഫിക്‌ ഫിലിമില്‍ പതി
പ്പിച്ചു. പരീക്ഷണത്തില്‍ അദ്ദേഹം താഴെപ്പറയുന്ന നിരീക്ഷണങ്ങള്‍ നടത്തി
പ്രിത്രം 1.6).
൫ ഭൂരിഭാഗം ആല്‍ഫാകണങ്ങളും സ്വര്‍ണ്ണത്തകിടിലൂടെ
യാതൊരു വ്യതിയാനവും ഇല്ലാതെ കടന്നുപോയി.
൫ പില ആല്‍ഫാകണങ്ങള്‍ സ്വര്‍ണ്ണത്തകിടില്‍ തട്ടിയ
പ്പോള്‍ നേര്‍രേഖയില്‍ നിന്ന്‌ ചെറിയ കോണളവില്‍
വ്യതിചലിച്ച്‌ സഞ്ചരിച്ചു.
൫ വളരെ കുറച്ച്‌ ആല്‍ഫാകണങ്ങള്‍ മാത്രം (ഏകദേശം
20000-ല്‍ 1) 180൦ കോണളവില്‍ വ്യതിചലിച്ച്‌ തിരി

ഈ നിരീക്ഷണങ്ങളില്‍ നിന്ന്‌ അദ്ദേഹം ചില അനുമാന ന്ന്ങ്ങളില്‍ എത്തിച്ചേര്‍ന്നു. ഗോള്‍ഡ്‌ ഫോയില്‍ പരീക്ഷണം - ചിത്രീകരണം

൫ ആറ്റത്തിന്റെ ഭൂരിഭാഗവും ശുന്യമായതിനാലാണ്‌ ഭൂരിപക്ഷം ആല്‍ഫാ
കണങ്ങളും വ്ൃതിയാനം കൂടാതെ കടന്നുപോയത്‌.

൫ പോസിറ്റീവ്‌ ചാര്‍ജ്‌ ഉള്ള ആല്‍ഫാകണങ്ങളില്‍ ചിലത്‌ ആറ്റത്തി
നുള്ളിലെ പോസിറ്റീവ്‌ ചാര്‍ജ്‌ ഉള്ള ഭാഗത്തിന്‌ സമീപത്ത്‌ കൂടി
കടന്നുപോയപ്പോള്‍ വികര്‍ഷിക്കപ്പെട്ടതിനാലാണ്‌ അവ ചെറിയ
കോണളവില്‍ വ്ൃതിചലിച്ചത്‌.

൫ ആറ്റത്തിലെ മുഴുവന്‍ പോസിറ്റീവ്‌ ചാര്‍ജും കേന്ദ്രീകരിച്ചിരിക്കുന്നത്‌
ആറ്റത്തിന്റെ മധ്യഭാഗത്തുള്ള ഒരു ചെറിയ വ്യാപ്ൃത്തിലാണ്‌. ഈ
കേന്ദ്രഭാഗം, ആറ്റത്തിന്റെ വലിപ്പവുമായി താരതമ്യം ചെയ്യുമ്പോള്‍,
തീരെ ചെറുതാണ്‌. ഇതിന്‌ നേരെ വന്ന ആല്‍ഫാകണങ്ങളാണ്‌ 180൦
കോണളവില്‍ തിരികെ വന്നത്‌. ഈ കേന്ദ്രത്തെ അദ്ദേഹം ന്യൂക്ലിയ
സ്‌ എന്ന്‌ വിളിച്ചു.

റഥര്‍ഫോര്‍ഡിന്റെ ആറ്റം മാതൃകയെ താഴെ പറയുന്ന രീതിയില്‍ ചുരുക്കി
എഴുതാം.
൫ ആറ്റത്തിന്‌ ന്യൂക്ലിയസ്‌ എന്ന ഒരു കേന്ദ്രഭാഗമുണ്ട്‌.
൫ ആറ്റത്തിന്റെ വലിപ്പവുമായി താരതമ്യം ചെയ്യുമ്പോള്‍ ന്യൂക്ലിയസിന്‌
വലിപ്പം വളരെ കുറവാണ്‌.
൭ ആറ്റത്തിന്റെ മുഴുവന്‍ പോസിറ്റീവ്‌ ചാര്‍ജും, മാസ്‌ ഏകദേശം
പൂര്‍ണമായും ന്യൂക്സിയസില്‍ കേന്ദ്രീകരിച്ചിരിക്കുന്നു.
൫ ഇലക്ലോണുകള്‍ ന്ൃൂക്ലിയസിനുചുറ്റും വൃത്താകൃതിയിലുള്ള
ഓര്‍ബിറ്റില്‍ വളരെ വേഗത്തില്‍ പ്രദക്ഷിണം ചെയ്യുന്നു.

ഈ മാതൃക സൌരയൂഥ മാതൃക എന്നറിയപ്പെടുന്നു.
റഥര്‍ഫോര്‍ഡിന്റെ ആറ്റം മാതൃകയുടെ പരിമിതികള്‍

വൈദ്യുതകാന്തിക സിദ്ധാന്തപ്രകാരം, ചലിക്കുന്ന ചാര്‍ജുള്ള കണ
ങ്ങള്‍ തുടര്‍ച്ചയായി ഈര്‍ജം പുറത്തുവിടേണ്ടതാണ്‌. അതിനാല്‍
റഥര്‍ഫോര്‍ഡ്‌ മാതൃക അനുസരിച്ച്‌ ന്യൂക്ലിയസിന്‌ ചുറ്റും വലംവയ്ക്കുന്ന
നെഗറ്റീവ്‌ ചാര്‍ജുള്ള ഇലക്ലോണുകള്‍ തുടര്‍ച്ചയായി ഈര്‍ജം നഷ്ടപ്പെടുത്തി
ന്യൂക്ലിയസില്‍ പതിക്കേണ്ടതുണ്ട്‌. എന്നാല്‍ ഇപ്രകാരം സംഭവിക്കുന്നി
ലൂ. അതുകൊണ്ട്‌ ആറ്റത്തിന്റെ സ്ഥിരത വിശദീകരിക്കാന്‍ റഥര്‍ഫോര്‍ഡ്‌
മാതൃകയ്ക്ക്‌ സാധിച്ചില്ല.

ന്യൂട്രോണ്‍

ന്യൂക്ലിയസിന്റെ യഥാര്‍ഥ മാസ്‌ പ്രോട്ടോണുകളുടെ എണ്ണത്തിന്റെ അടി
സ്ഥാനത്തില്‍ റഥര്‍ഫോര്‍ഡ്‌ കണക്കുകൂട്ടിയതിനേക്കാള്‍ വളരെ കൂടുതലാ
ണെന്ന്‌ കണ്ടു. എന്നാല്‍ ഈ വൈരുദ്ധ്യം പരീക്ഷണങ്ങളിലൂടെ തെളിയി
ക്കാന്‍ അദ്ദേഹത്തിന്‌ കഴിഞ്ഞില്ല. പിന്നിട്‌ 1932-ല്‍ ജെയിംസ്‌ ചാഡ്വിക്‌
(൩൦5 ൩൭൧0൦019) ചില നിര്‍വീര്യ കണങ്ങള്‍ കൂടി ന്യൂക്ലിയസിനകത്തു
ണ്ടെന്നും അവയ്ക്ക്‌ ഏകദേശം ഹൈഡ്രജന്‍ ആറ്റത്തിന്റെ മാസ്‌ ആണെന്നും
കണ്ടെത്തി. ചാര്‍ജ്‌ ഇല്ലാത്തതിനാല്‍ ഈ കണത്തിന്‌ ന്യൂട്രോണ്‍ എന്ന
പേര്‌ നല്‍കി.
നീല്‍സ്‌ ബോറിന്റെ ആറ്റം മാതൃക

റഥര്‍ഫോഡിന്റെ ആറ്റം മാതൃകയുടെ പരിമിതികള്‍ പരിഹരിക്കുന്നതിനായി
1913-ല്‍ ഡാനിഷ്‌ ശാസ്ത്രജ്ഞനായ നീല്‍സ്‌ ബോര്‍ (165 130൨) അവതരി
പ്ലിച്ച മാതൃകയാണ്‌ ബോര്‍ ആറ്റം മാതൃക.

ബോര്‍ ആറ്റം മാതൃകയിലെ പ്രധാന ആശയങ്ങള്‍

ആറ്റത്തിന്റെ ന്യൂക്ലിയസിനു ചുറ്റും ഇലക്ലോണ്‍ പ്രദക്ഷിണം ചെയ്യു
ന്നത്‌ നിശ്ചിത ഓര്‍ബിറ്റുകളില്‍ ആണ്‌.

ഓരോ ഓര്‍ബിറ്റിലെയും ഇലക്ലോണിന്‌ ഒരു നിശ്ചിത ഈര്‍ജമുണ്ട്‌.
അതിനാല്‍ ഓര്‍ബിറ്റുകളെ ഈര്‍ജനിലകള്‍ (മേണ്ഇു/ 1ങെിട) എന്നു
പറയുന്നു.

ഒരു നിശ്ചിത ഓര്‍ബിറ്റില്‍ പ്രദക്ഷിണം ചെയ്യുന്നിടത്തോളം ഇലക്നോ
ണിന്റെ ഈര്‍ജം കൂടുകയോ കുറയുകയോ ചെയ്യുന്നില്ല. അതിനാല്‍
ഓര്‍ബിറ്റുകള്‍ സ്ഥിരോര്‍ജനിലകള്‍ എന്നും അറിയപ്പെടുന്നു.
ന്യൂക്ലിയസില്‍ നിന്നുള്ള അകലം കൂടുംതോറും ഓര്‍ബിറ്റുകളുടെ
ഈര്‍ജവും കൂടുന്നു.

ഈര്‍ജം കൂടിയ ഓര്‍ബിറ്റില്‍ നിന്നും ഈര്‍ജം കുറഞ്ഞ ഓര്‍ബിറ്റിലേയ്ക്ക്‌
ഇലക്നോണ്‍ മാറുമ്പോള്‍ ഈര്‍ജം പുറത്തേയ്ക്ക്‌ വിടുന്നു. ഈര്‍ജം
കുറഞ്ഞ ഓര്‍ബിറ്റുകളില്‍ നിന്നും ഈര്‍ജം കൂടിയ ഓര്‍ബിറ്റുകളിലേക്ക്‌
ഇലക്ലനോണ്‍ മാറുമ്പോള്‍ ഈര്‍ജം ആഗിരണം ചെയ്യുന്നു.
ഓര്‍ബിറ്റുകള്‍ക്ക്‌ 1, 2, 3, 4, 5... എന്നിങ്ങനെ സംഖ്യകള്‍ നല്‍കി
സൂചിപ്പിക്കാവുന്നതാണ്‌.

തുടര്‍ന്ന്‌ വന്ന ചില പഠനങ്ങളില്‍ ഈര്‍ജനിലകളെ ഷെല്ലുക
ളെന്നും വിളിച്ചിരുന്നു.

1, 2, 3, 4, ... ഈര്‍ജനിലകളെ യഥാക്രമം %, 1. , 1 എന്നിങ്ങനെ
ഷെല്ലുകളായി പരിഗണിക്കാം (ചിത്രം 1.7.
സബ്്‌അറ്റോമിക കണങ്ങളായ ഇലക്ലോണ്‍, പ്രോട്ടോണ്‍,
ന്യൂട്രോണ്‍ എന്നിവയുടെ ചില സവിശേഷതകള്‍ പട്ടിക
1.2-ല്‍ കൊടുത്തിരിക്കുന്നു. വിട്ടുപോയ ഭാഗം പൂരിപ്പിച്ച്‌
സയന്‍സ്‌ ഡയറിയില്‍ രേഖപ്പെടുത്തുക.
൫ ഒരു ഇലക്ലോണിന്റെ മാസ്‌ പ്രോട്ടോണിന്റെ മാസിന്റെ ന ഭാഗം ആണ്‌.
വിവിധ ആറ്റം മാതൃകകള്‍ നിങ്ങള്‍ പരിചയപ്പെട്ടു കഴിഞ്ഞല്ലോ. രസതന്ത്ര
ത്തിലെ പല ആശയങ്ങളും ലളിതവത്കരിക്കുന്നതിന്‌ ഈ ആറ്റം മാതൃകകള്‍
സഹായിച്ചു. പിന്നീടും ധാരാളം ആറ്റം മാതൃകകള്‍ ശാസ്ത്രജ്ഞര്‍ മുന്നോട്ടു



    
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
