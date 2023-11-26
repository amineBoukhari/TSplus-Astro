from pathlib import Path
import re
import json
import re
import glob
import shutil
import os

def extract_value_after_date(text):
    # Use a regular expression to match the pattern "date:" followed by any non-whitespace characters
    match = re.search(r'date:\s*(\S+)', text, re.IGNORECASE)

    # Check if a match is found
    if match and match.group(1):
        # Remove spaces from the result
        value_after_date = match.group(1).replace('"', '')
        return value_after_date
    else:
        # Return None or handle the case when no match is found
        return None

#useful func 
#image_link_corrector : replace "images/" with "./images/" -> otherwise .md error will occure 
def image_link_corrector():
    blogs = []

    for path in Path('./blog-posts').rglob('*.md'):
        blogs.append(path)


    for path in blogs :
        with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                print(content)

            # Perform the replacement
                modified_content = content.replace("images/", "./images/")

        with open(path, 'w', encoding='utf-8') as file:
                file.write(modified_content)


# copy_images_to_dest : copy all the post's image to public/images
def copy_images_to_dest(input_title):
    images =[]
    for path in Path(src_dir).rglob('*.png'):
        images.append(path)
        shutil.copy(path, dst_dir)



def modify_title(input_title):
    # Find the index of the colon
    colon_index = input_title.find(":")

    if colon_index != -1:
        # Remove everything before and including the colon, replace spaces with hyphens, and convert to lowercase
        result_string = input_title[colon_index + 1:].replace(" ", "-").lower()
    else:
        # If there is no colon, replace spaces with hyphens and convert to lowercase
        result_string = input_title.replace(" ", "-").lower()

    if result_string.startswith('-'):
        result_string = result_string[1:]

    # Remove all instances of " : -"
    result_string = result_string.replace('"', '')

    # Remove the question mark from the end
    result_string = result_string.replace('?', '')
    result_string = re.sub(r'\?+$', '', result_string)

    return result_string
#main func 

#ADD SLUG PARM 
def add_slug(src_dir):
    tmp =""
    blogs = []

    for path in Path(src_dir).rglob('*.md'):
        blogs.append(path)
    print(blogs)

    for blog_path in blogs:
        with open(blog_path, 'r',encoding='utf-8' , errors='ignore') as file:
            lines = file.readlines()

            file.seek(0)
            content = file.read()
            for line in lines:
                if "title" in line :
                    print(modify_title(line)) 
                    lines.insert(1,"slug : " + extract_value_after_date(content) +"-"+ modify_title(line))
                    break 
        
        with open(blog_path, 'w') as file:
            file.writelines(lines)

#ADD IMGLINK PARM 
def add_imgLink(src_dir , dst_dir):
    tmp =""
    blogs = []

    for path in Path(src_dir).rglob('*.md'):
        blogs.append(path)
    print(blogs)

    for blog_path in blogs:
        with open(blog_path, 'r') as file:
            lines = file.readlines()
            file.seek(0)
            content = file.read()
            for img_path in Path(dst_dir).rglob('*.png'):
             print(str(img_path.name) + "\n")
             if str(img_path.name) in content:
                 print("yes")
                 lines.insert(1, 'imageLink : ' + str(img_path.name) + '\n')
                 break 

        with open(blog_path, 'w') as file:
            file.writelines(lines)

#ADD DRAFT STATUS PARM (always false for old posts)
def add_draft(src_dir):
    tmp =""
    blogs = []

    for path in Path(src_dir).rglob('*.md'):
        blogs.append(path)
    for blog_path in blogs:
        with open(blog_path, 'r') as file:
            lines = file.readlines()
            lines.insert(1,"draft : false \n" )     
        with open(blog_path, 'w') as file:
            file.writelines(lines)

#REPLACE categories with tags 
def extract_categories(file_path):
    blogs =[]
    for path in Path(file_path).rglob('*.md'):
        blogs.append(path)
    for blog_path in blogs:
        with open(blog_path, 'r') as file:
            content = file.read()
            match = re.search(r'categories:\s*\n\s*-\s*"([^"]*)"', content)
            
               
        if match:
                categories = match.group(1)
                pattern = re.compile(r'categories:\s*\n\s*-\s*"([^"]*)"')
                modified_content = pattern.sub('', content)
                with open(blog_path, 'w') as file:
                     file.write(modified_content)
                with open(blog_path, 'r') as file:
                    file.seek(0)
                    lines =file.readlines()
                    lines.insert(1 , "tags: ['" +categories +"']\n")
                    
                with open(blog_path, 'w') as file:
                 file.writelines(lines)


input_text = """
categories:
  - "remote-support"
"""
src_dir = "./blog-posts"
dst_dir = "./images"

def remove_slug(file_path):
    blogs =[]
    for path in Path(file_path).rglob('*.md'):
        blogs.append(path)
    for blog_path in blogs:
        with open(blog_path, 'r') as file:
            lines = file.readlines()
            filtered_lines = [line for line in lines if 'slug :' not in line.lower()]
        with open(blog_path, 'w') as file:
            file.writelines(filtered_lines)
            
def remove_question_marks_from_end(text):
    pattern = re.compile(r'^\s*slug : \s*.*\?+\s*$')

    # Use the sub function to remove question marks from the line
    cleaned_line = re.sub(pattern, lambda match: match.group(0).rstrip('?'), text)

    return cleaned_line
def remove_C_from_slug(file_path):
    blogs =[]
    for path in Path(file_path).rglob('*.md'):
        blogs.append(path)
    for blog_path in blogs:
        with open(blog_path, 'r') as file:
            lines = file.readlines()
            cleaned_lines = [remove_question_marks_from_end(line) for line in lines]
        with open(blog_path, 'w') as file:
            file.writelines(cleaned_lines)
       
add_slug(src_dir)