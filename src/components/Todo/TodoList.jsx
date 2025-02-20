/* eslint-disable react/prop-types */
import TodoRow from './TodoRow'; 
import { ClipLoader } from 'react-spinners'; 

export default function TodoList({ list, onRemove, loading }) {
  console.log("TodoList rendered");
  
  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((ele, index) => (
              <TodoRow key={ele._id} todo={ele} index={index} onRemove={onRemove} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
