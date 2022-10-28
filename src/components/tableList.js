import Table from 'react-bootstrap/Table';
import styles from "../styles/tableList.module.css";

const TableList = ({ dataList }) => {
    return (
        <>
            <Table striped bordered hover size="sm" className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>CreatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.city}</td>
                            <td>{item.address}</td>
                            <td>{item.createdAt}</td>
                        </tr>
                    ))}


                </tbody>
            </Table>
        </>
    );
}

export default TableList;