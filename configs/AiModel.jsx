const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course tutorial on following detail with field as Course Name, Description, Along with Chapter Name, About, Duration: Category: ‘Programming’, Topic: Python , Level: Basic, Duration: 1 hours, NoOfChapters in JSON Format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python for Beginners: Your First Steps in Programming\",\n  \"description\": \"This course provides a gentle introduction to the world of programming using Python. You'll learn the fundamentals, from setting up your environment to writing your first simple programs. No prior programming experience is required!\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n    \"noOfChapters\": 4,\n    \"chapters\": [\n    {\n      \"chapterName\": \"Chapter 1: Setting Up Your Python Environment\",\n      \"about\": \"This chapter guides you through installing Python and choosing a suitable code editor. We'll ensure your environment is ready for writing Python code.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Chapter 2: Introduction to Variables and Data Types\",\n        \"about\": \"Learn the core concepts of variables and fundamental data types like numbers, strings, and booleans. Understand how to store and manipulate data in Python.\",\n      \"duration\": \"15 minutes\"\n    },\n      {\n      \"chapterName\": \"Chapter 3: Basic Operations and Input/Output\",\n          \"about\": \"Explore arithmetic operations, string manipulation, and how to get input from the user and display output. Practice writing simple Python programs.\",\n      \"duration\": \"15 minutes\"\n    },\n      {\n        \"chapterName\": \"Chapter 4: Control Flow: If Statements\",\n          \"about\": \"Learn how to control the flow of your programs using if statements. Understand conditional logic and write programs that make decisions based on different conditions.\",\n      \"duration\": \"15 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 