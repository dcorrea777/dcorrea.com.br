import { Container, Avatar, Text} from "./styles"


function Header() {
    return (
        <Container>
            <Avatar>
                <img src="avatar.jpeg"  alt="Danilo Correa Profile" />
                <h1>Danilo Correa</h1>
            </Avatar>
            <Text>
                <p>
                    Software Enginner - AWS Certified (Cloud Practitioner, Solutions Architect)
                </p>
            </Text>
            <Text>
                <p>
                    I have been working in web development for over 13 years, starting as a junior backend developer and advancing
                    to mid-level and senior backend roles, ultimately reaching my current position as a Software Engineer.
                    Currently, I focus on cloud architecture using serverless services on AWS.
                    I have dedicated the last 5 years to cloud architecture, with a strong interest in serverless design.
                    My experience as a developer has given me valuable skills in pipeline automation and integrating AWS services.
                </p>
            </Text>
        </Container>
    )
}

export default Header
