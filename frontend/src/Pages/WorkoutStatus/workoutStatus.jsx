import axios from 'axios';
import { useEffect, useState } from "react";


function WorkoutStatus() {
  // Logic
  const [workoutStatusid, setId] = useState('');
  const [distanceRun, setDistanceRun] = useState("");
  const [numberOfPushups, setNumberOfPushups] = useState("");
  const [weightLifted, setWeightLifted] = useState("");
  const [description, setDescription] = useState("");
  const [workout_statuses, setWorkout_Statuses] = useState([]);
  const [oldestWorkout, setOldestWorkout] = useState(null);
  const [latestWorkout, setLatestWorkout] = useState(null);
  const [validationError, setValidationError] = useState(null);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  useEffect(() => {
    if (workout_statuses.length > 0) {
      setOldestWorkout(workout_statuses[0]);
      setLatestWorkout(workout_statuses[workout_statuses.length - 1]);
    }
  }, [workout_statuses]);

  async function Load() {
    const result = await axios.get("http://localhost:9000/workoutStatus/getAll");
    setWorkout_Statuses(result.data);
  }

  async function save(event) {
    event.preventDefault();
    if (!distanceRun || !numberOfPushups || !weightLifted || !description) {
      setValidationError("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:9000/workoutStatus/save", {
        distanceRun: distanceRun,
        numberOfPushups: numberOfPushups,
        weightLifted: weightLifted,
        description: description
      });
      alert("Workout Status Created Successfully");
      setId("");
      setDistanceRun("");
      setNumberOfPushups("");
      setWeightLifted("");
      setDescription("");
      setValidationError(null);
      Load();
    } catch (err) {
      alert("Workout Status Creation Failed");
    }
  }

  async function editWorkoutStatus(workout_statuses) {
    setDistanceRun(workout_statuses.distanceRun);
    setNumberOfPushups(workout_statuses.numberOfPushups);
    setWeightLifted(workout_statuses.weightLifted);
    setDescription(workout_statuses.description);
    setId(workout_statuses._id);
  }

  async function DeleteWorkoutStatus(workoutStatusid) {
    await axios.delete("http://localhost:9000/workoutStatus/delete/" + workoutStatusid);
    alert("Workout Status Deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    if (!distanceRun || !numberOfPushups || !weightLifted || !description) {
      setValidationError("Please fill in all fields.");
      return;
    }
    try {
      await axios.put("http://localhost:9000/workoutStatus/edit/" + workoutStatusid, {
        distanceRun: distanceRun,
        numberOfPushups: numberOfPushups,
        weightLifted: weightLifted,
        description: description
      });
      alert("Workout Status Updated");
      setId("");
      setDistanceRun("");
      setNumberOfPushups("");
      setWeightLifted("");
      setDescription("");
      setValidationError(null);
      Load();
    } catch (err) {
      alert("Workout Update Failed");
    }
  }

  // Design
  return (
    <div>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '2.5rem', 
        color: '#333', 
        borderBottom: '2px solid #ccc', 
        paddingBottom: '0.5rem', 
        marginBottom: '2rem',
        backgroundColor: '#f0f0f0' // Light gray background color
      }}>
        Current Workout Status
      </h1>

      {validationError && <div style={{ color: 'red', textAlign: 'center' }}>{validationError}</div>}

        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px', maxWidth: '500px', margin: '0 auto' }}>
          <form style={{ marginBottom: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Distance Run (km)</label>
              <input 
                type="text" 
                className="form-control" 
                id="distanceRun"
                value={distanceRun}
                onChange={(event) => setDistanceRun(event.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Number of Pushups</label>
              <input 
                type="text" 
                className="form-control" 
                id="numberOfPushups"
                value={numberOfPushups}
                onChange={(event) => setNumberOfPushups(event.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Weight Lifted (kg)</label>
              <input 
                type="text" 
                className="form-control" 
                id="weightLifted"
                value={weightLifted}
                onChange={(event) => setWeightLifted(event.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
              <input 
                type="text" 
                className="form-control" 
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button 
                className="btn btn-primary mt-4" 
                onClick={save}
                style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: '4px', 
                  backgroundColor: '#007bff', 
                  color: '#fff', 
                  border: 'none', 
                  marginRight: '0.5rem' 
                }}
              >
                Create
              </button>
              <button 
                className="btn btn-warning mt-4" 
                onClick={update}
                style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: '4px', 
                  backgroundColor: '#ffc107', 
                  color: '#000', 
                  border: 'none' 
                }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      

      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {latestWorkout && (
          <div className="container mt-4" style={{ flexBasis: '45%', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginRight: '0.5rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Latest Workout Status</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Distance Run (km) :  {latestWorkout.distanceRun}</li>
              <li style={{ marginBottom: '0.5rem' }}>Number of Pushups :  {latestWorkout.numberOfPushups}</li>
              <li style={{ marginBottom: '0.5rem' }}>Weight Lifted (kg) :  {latestWorkout.weightLifted}</li>
              <li style={{ marginBottom: '0.5rem' }}>Description :  {latestWorkout.description}</li>
            </ul>
          </div>
        )}

        {oldestWorkout && (
          <div className="container mt-4" style={{ flexBasis: '45%', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginLeft: '0.5rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Oldest Workout Status</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Distance Run (km) :  {oldestWorkout.distanceRun}</li>
              <li style={{ marginBottom: '0.5rem' }}>Number of Pushups :  {oldestWorkout.numberOfPushups}</li>
              <li style={{ marginBottom: '0.5rem' }}>Weight Lifted (kg) :  {oldestWorkout.weightLifted}</li>
              <li style={{ marginBottom: '0.5rem' }}>Description :  {oldestWorkout.description}</li>
            </ul>
          </div>
        )}
      </div>

      <br />
      <br />

      <table className="table table-light" align="center" style={{ borderCollapse: 'collapse', width: '80%', margin: 'auto' }}>
        <thead style={{ backgroundColor: '#f8f9fa' }}>
          <tr>
            <th scope="col" style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Distance Run (km)</th>
            <th scope="col" style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Number of Pushups</th>
            <th scope="col" style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Weight Lifted (kg)</th>
            <th scope="col" style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Description</th>
            <th scope="col" style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>Option</th>
          </tr>
        </thead>
        {workout_statuses.map(function fn(workoutStatus) {
          return (
            <tbody key={workoutStatus._id}>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{workoutStatus.distanceRun}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{workoutStatus.numberOfPushups}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{workoutStatus.weightLifted}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{workoutStatus.description}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                  <button type="button" className="btn btn-warning" style={{ marginRight: '5px' }} onClick={() => editWorkoutStatus(workoutStatus)}>Edit</button>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteWorkoutStatus(workoutStatus._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

    </div>
  );
}

export default WorkoutStatus;
