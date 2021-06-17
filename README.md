# to-Do-App
This notes taking app takes command from the terminal and performs the following functions:

- **Add note** ->  Requires user to enter Title and Body of the note and adds the note to our databse (json file)
- **Remove note** -> Requires user to enter the Title of the note they want to remove and removes that note
- **List notes** ->Lists the title of all the notes present
- **Read note** -> Requires user to enter the title of the note they want to read and displays the body of that note on the terminal

# usage
NAME :- 

      node todoApp - CLI based notes maker
      
SYNOPSIS :- 

      node todoApp  [COMMAND] [OPTIONS]...

DESCRIPTION :- 

      Make notes using cli based system and store it into the notes.txt file

COMMAND :- 

      add
          to add the note with title and body
      
      remove
          to remove the note specified with title
      
      read
          to read the note specified with title
      
      list
          to list all the titles 

OPTIONS :- 

      --title
          to add the title for the note.

      --body
          to add the body for the note.

EXAMPLE :- 

      To add a note
          node todoApp add --title="My title" --body="my body"

      To remove a note
          node todoApp remove --title="My title"
      
      To list all the notes
          node todoApp list
      
      To read a note
          node todoApp read --title="My title"

AUTHOR :- 

       Written by Gaurav Sharma.
