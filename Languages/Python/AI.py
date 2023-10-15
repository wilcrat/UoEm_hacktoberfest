
#Work with google's free generative AI, PALM API to intergrate their AI into your projects
#For more documentation and to geneate your api key visit https://developers.generativeai.google/
#Here is an example with python

#This line imports the "pprint" module, which stands for "pretty-print."
#It's used to format and print data structures in a more human-readable way
import pprint

#This line imports the "google.generativeai" library and renames it as "palm."
import google.generativeai as palm

#provide a valid api-key to access it
palm.configure(api_key="")

"""This line retrieves a list of text generation models provided by
 the "palm" library. It filters this list to only include models that
support text generation, specifically those with 'generateText' in their
supported generation methods"""

models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
model = models[0].name
print(model)


question = input("Ask AI: ")

print("\n")
prompt = f"""{question}
"""

"""This line uses the "palm" library to generate text
based on the provided model and prompt. It specifies
various parameters for text generation:"""

completion = palm.generate_text(
    model=model,
    prompt=prompt,
    temperature=0,
    # The maximum length of the response
    max_output_tokens=8000,
)

#Prints out the generated text
print(completion.result)
