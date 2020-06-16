import React, {useState} from 'react'
import { LinkedList } from './LinkedList'


const ll = new LinkedList();

function LinkedListDisplay(){

    const [linkedList, setLinkedList] = useState(ll);
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");
    const [current, setCurrent] = useState('{ null }');
    const [nodeAmount, setNodeAmount] = useState("");
    const [total, setTotal] = useState(0);

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value));
    };

    const handleInsert = () => {
        if (!subject) {
            alert('Please enter values into the appropriate fields.')
            return
        }
        if (!amount) {
            alert('Please enter values into the appropriate fields.')
            return
        }
        linkedList.insert(subject, amount);
        setLinkedList(linkedList);
        // setCurrent(linkedList.head.showSubject());
        // setNodeAmount(linkedList.head.showAmount());
        setDisplay()
    }

    const handleDelete = () => {
        linkedList.delete();
        setLinkedList(linkedList);
        setDisplay()
        // setTotal(ll.total);
    }

    const handleFirstRecord = () => {
        ll.first();
        setDisplay();
    }

    const handlePrevRecord = () => {
        ll.previous();
        setDisplay();
    }

    const handleNextRecord = () => {
        ll.next();
        setDisplay();
    }

    const handleLastRecord = () => {
        ll.last();
        setDisplay();
    }

    const handleShowTotal = () => {
        setTotal(ll.total());
    }

    const setDisplay = () => {
        ll.size > 0 ? setCurrent(linkedList.currentNode.showSubject()) : setCurrent('{ null }');
        ll.size > 0 ? setNodeAmount(linkedList.currentNode.showAmount()) : setNodeAmount("");
    }

    return (
        <div>
            <h1>Linked List Manager</h1>
            <div>
                <span>Current Node:</span> { current } <br />
                <span>Node Value: { nodeAmount } </span> <br />
                <span>Total of all Nodes: { total } </span>
            </div>
            <div>
                <h3>Selector Switch!</h3>
                <div>
                    <span title="First Record" onClick={handleFirstRecord}>First  |</span>&nbsp;
                    <span title="Previous Record" onClick={handlePrevRecord}>Previous  |</span>&nbsp;
                    <span title="Next Record" onClick={handleNextRecord}>Next  |</span>&nbsp;
                    <span title="Last Record" onClick={handleLastRecord}>Last  |</span>&nbsp;
                    <span title="Last Record" onClick={handleShowTotal}>Total</span>
                </div><br />
                <div>
                    Subject: <input type="text" onChange={handleSubjectChange} /><br />
                    Amount: <input type="number" onChange={handleAmountChange} /><br /><br />
                    <button onClick={handleInsert}>Insert Record To List</button><br />
                    <button onClick={handleDelete}>Delete Current Record</button><br />
                </div>
            </div>
        </div>
    )
}



export default LinkedListDisplay;