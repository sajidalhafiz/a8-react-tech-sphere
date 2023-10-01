import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion';


const QABlog = (props) => {
    const { question, answer} = props.answer;

    return (
        <div className='text-start'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>{answer}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QABlog;