import spotlightimg from './images/spotlight.png'
import notesappimg from './images/notesapp.png'

const data = [
    {
        name: "Spotlight",
        description: 'a social media app allowing users to "Spotlight" personal stories and meaningful events.',
        tags: ["React", "Chakra UI", "Express", "AWS", "Mongoose/MongoDB"],
        repos: {
            "Website": "https://seir-6-6-spotlight-app-client.herokuapp.com/",
            "Front End": "https://github.com/tzou2024/project-3-react",
            "Back End": "https://github.com/tzou2024/project-3-mongoose-express",
        },
        img: spotlightimg
    },
    {
        name: "Notes App",
        description: 'a google docs style note taking app with folders and notes',
        tags: ["React", "Chakra UI", "Django", "PostgreSQL", "Django REST framework"],
        repos: {
            "Website": "https://tzounotesclient.herokuapp.com/sign-in",
            "Front End": "https://github.com/tzou2024/noteclient",
            "Back End": "https://github.com/tzou2024/noteserver",
        },
        img: notesappimg
    },
    
]

export default data
