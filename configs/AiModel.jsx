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
            {text: "Generate a course tutorial on following detail with field as Course Name, Description, Along with Chapter Name, About, Duration: Category: ‘Programming’, Topic: Python , Level: Basic, Duration: 1 hours, NoOfChapters:5, in JSON Format"},
          ],
        },
        {
          role: "model",
          parts: [
             {text: "```json\n{\n  \"courseName\": \"Python Programming Fundamentals\",\n  \"description\": \"This course provides a beginner-friendly introduction to the Python programming language. You'll learn the core concepts and build a solid foundation for more advanced programming.\",\n   \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5,\n  \"chapters\": [\n    {\n      \"chapterName\": \"Introduction to Python and Setting Up\",\n      \"about\": \"This chapter introduces the Python programming language, its applications, and how to set up your development environment. You'll learn how to install Python and choose a suitable code editor.\",\n       \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Variables, Data Types, and Operators\",\n      \"about\": \"This chapter covers the fundamental building blocks of Python programming: variables, data types (integers, floats, strings, booleans), and operators. You'll learn how to store and manipulate data in your programs.\",\n       \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements\",\n      \"about\": \"This chapter teaches you how to make decisions in your code using conditional statements (if, elif, else). You'll learn to control the execution flow based on specific conditions.\",\n       \"duration\": \"10 minutes\"\n    },\n       {\n      \"chapterName\": \"Control Flow: Loops\",\n      \"about\": \"This chapter explains how to repeat blocks of code using loops (for and while). You'll learn how to iterate through collections of data and automate repetitive tasks.\",\n       \"duration\": \"10 minutes\"\n    },\n    {\n       \"chapterName\": \"Basic Input/Output and Simple Programs\",\n      \"about\": \"This chapter demonstrates how to take input from users and display output. You'll put your learned skills to practice by building simple interactive programs.\",\n       \"duration\": \"20 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });


   export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: Python Basic, Chapter:Variables and Data Types, in JSON Format with list of array with field as title, explanation on give chapter in detail, Code Example( Code Field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"topic\": \"Python Basics: Variables and Data Types\",\n  \"chapters\": [\n    {\n      \"title\": \"Introduction to Variables\",\n      \"explanation\": \"In Python, a variable is a named storage location in a computer's memory that holds a value. Think of it like a container that can hold different types of data. You can assign a value to a variable using the assignment operator (=).  Variables are essential for storing and manipulating information in your programs. Variable names should be descriptive and follow Python naming conventions (e.g., start with a letter or underscore, contain only alphanumeric characters or underscores). Dynamic typing in Python means you don't need to explicitly declare a variable's type; Python infers it at runtime based on the assigned value. Variables are case-sensitive (e.g., 'myVar' is different from 'myvar').\",\n       \"code_example\": \"<pre><code class=\\\"language-python\\\">\\n# Assigning values to variables\\nmessage = \\\"Hello, Python!\\\"\\nnumber = 10\\npi = 3.14\\nis_active = True\\n\\n# Printing variable values\\nprint(message)\\nprint(number)\\nprint(pi)\\nprint(is_active)\\n\\n# Example of variable name being case-sensitive\\nmy_variable = 5\\nMy_Variable = 10\\n\\nprint(my_variable) # Output 5\\nprint(My_Variable) # Output 10\\n</code></pre>\"\n    },\n    {\n      \"title\": \"Integer (int) Data Type\",\n      \"explanation\": \"The `int` data type represents whole numbers, both positive and negative, without any decimal points. Integers are used for counting, indexing, and representing quantities. Python supports integers of arbitrary precision, meaning they can be as large or as small as necessary to fit into memory. This contrasts with other languages that may have a limited range for integer types. You can perform arithmetic operations such as addition, subtraction, multiplication, division, modulus (remainder), etc on integers. Python automatically converts integer from decimal format, binary format (0b prefix), octal (0o prefix) and hexadecimal (0x prefix).\",\n      \"code_example\": \"<pre><code class=\\\"language-python\\\">\\n# Integer examples\\nage = 30\\ncount = 1000\\nnegative_number = -5\\nlarge_number = 12345678901234567890\\n\\n# Arithmetic operations\\nsum_of_ages = age + 10\\ndifference = count - 50\\nproduct = age * 2\\n\\nprint(\\\"Age:\\\",age)\\nprint(\\\"Count:\\\",count)\\nprint(\\\"Negative number:\\\",negative_number)\\nprint(\\\"Large number:\\\", large_number)\\nprint(\\\"Sum of ages:\\\",sum_of_ages)\\nprint(\\\"Difference:\\\",difference)\\nprint(\\\"Product:\\\",product)\\n\\n# Integer format conversion\\ndecimal_number = 255\\nbinary_number = 0b11111111\\noctal_number = 0o377\\nhexadecimal_number = 0xff\\n\\nprint(\\\"Decimal:\\\",decimal_number)\\nprint(\\\"Binary:\\\",binary_number)\\nprint(\\\"Octal:\\\",octal_number)\\nprint(\\\"Hexadecimal:\\\",hexadecimal_number) \\n</code></pre>\"\n    },\n    {\n      \"title\": \"Floating-Point (float) Data Type\",\n      \"explanation\": \"The `float` data type represents numbers with decimal points. They are used to represent measurements, fractions, and numbers that require greater precision than integers. Floating-point numbers have a limited precision, which means they can't represent every real number exactly; this can lead to small rounding errors. Python uses double-precision floating-point numbers (64-bit).  Scientific notation (e.g., 1.2e3 for 1200.0) can be used to represent very large or very small floats. Like integers, you can perform arithmetic operations on floats.\",\n        \"code_example\": \"<pre><code class=\\\"language-python\\\">\\n# Float examples\\nprice = 99.99\\ntemperature = 25.5\\npi_value = 3.14159\\nscientific_num = 1.23e5\\n\\n\\n# Arithmetic operations\\nsum_price = price + 5.00\\ndivision_temp = temperature / 2\\nproduct_pi = pi_value * 2\\n\\nprint(\\\"Price:\\\",price)\\nprint(\\\"Temperature:\\\",temperature)\\nprint(\\\"Pi Value:\\\",pi_value)\\nprint(\\\"Scientific notation:\\\",scientific_num)\\nprint(\\\"Sum of price:\\\",sum_price)\\nprint(\\\"Division:\\\",division_temp)\\nprint(\\\"Product:\\\",product_pi)\\n</code></pre>\"\n    },\n    {\n      \"title\": \"String (str) Data Type\",\n      \"explanation\": \"The `str` data type represents sequences of characters. Strings are used to store textual data, such as names, messages, and descriptions. String literals can be defined using single (' '), double (\\\" \\\"), or triple (''' ''') quotes. Triple quotes allow strings to span multiple lines. Strings are immutable, meaning that once a string is created, it cannot be changed. Instead, you can create new strings based on existing ones. Common string operations include concatenation (joining strings), slicing (extracting portions), formatting, and various built-in methods for case conversion, finding substrings, etc.\",\n      \"code_example\": \"<pre><code class=\\\"language-python\\\">\\n# String examples\\nname = 'Alice'\\nmessage = \\\"Hello, World!\\\"\\nlong_text = '''This is a \\nmultiline\\nstring.'''\\n\\n# String concatenation\\ngreeting = \\\"Hello, \\\" + name\\nprint(greeting)\\n\\n# String slicing\\nsubstring = message[0:5]\\nprint(substring)\\n\\n# String formatting\\nformatted_str = f\\\"My name is {name} and the message is {message}\\\"\\nprint(formatted_str)\\n\\n# String methods\\nprint(\\\"Upper case:\\\" ,message.upper())\\nprint(\\\"lower case:\\\" ,message.lower())\\n</code></pre>\"\n    },\n     {\n      \"title\": \"Boolean (bool) Data Type\",\n      \"explanation\": \"The `bool` data type represents truth values: either `True` or `False`. Booleans are used in conditional statements and logical operations. They are also the result of comparison operations, like checking if one number is greater than another.  In Python, `True` is represented by `1`, and `False` is represented by `0`.  Boolean operations include `and`, `or`, and `not`.\",\n       \"code_example\": \"<pre><code class=\\\"language-python\\\">\\n# Boolean examples\\nis_valid = True\\ncompleted = False\\n\\n# Comparison operations result in boolean values\\nnum1 = 10\\nnum2 = 5\\ngreater_than = num1 > num2  # True\\nless_than = num1 < num2      # False\\n\\n# Boolean operations\\nresult_and = is_valid and completed    # False\\nresult_or = is_valid or completed    # True\\nresult_not = not is_valid      # False\\n\\n\\nprint(\\\"Is Valid:\\\", is_valid)\\nprint(\\\"Is Completed:\\\", completed)\\nprint(\\\"Greater Than:\\\", greater_than)\\nprint(\\\"Less Than:\\\", less_than)\\nprint(\\\"Result And:\\\", result_and)\\nprint(\\\"Result Or:\\\", result_or)\\nprint(\\\"Result Not:\\\", result_not)\\n</code></pre>\"\n    },\n    {\n       \"title\": \"Data Type Conversion (Type Casting)\",\n       \"explanation\": \"Python allows you to convert data from one type to another using type casting. Common functions include `int()`, `float()`, and `str()`. Type casting is useful for ensuring that variables are of the correct type before performing operations on them. In cases, a data type cannot be converted to other types (string to number), it throws an error.\",\n        \"code_example\": \"<pre><code class=\\\"language-python\\\">\\n# Type casting examples\\nnum_str = \\\"123\\\"\\nnum_int = int(num_str)\\nnum_float = float(num_str)\\n\\n\\nfloat_num = 45.67\\nint_num_cast = int(float_num)\\nstr_num_cast = str(float_num)\\n\\n# string conversion\\nnum = 123\\nnum_to_str = str(num)\\n\\n\\nprint(\\\"String to int:\\\", num_int, type(num_int))\\nprint(\\\"String to float:\\\", num_float,type(num_float))\\n\\nprint(\\\"Float to int:\\\",int_num_cast, type(int_num_cast))\\nprint(\\\"Float to string:\\\",str_num_cast, type(str_num_cast))\\n\\nprint(\\\"Integer to string:\\\" ,num_to_str, type(num_to_str))\\n</code></pre>\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 