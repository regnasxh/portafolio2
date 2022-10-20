import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";


function Financial() {
    return (
        <div className="root_container">
            <Navbar />
            <Dashboard url={'https://app.powerbi.com/view?r=eyJrIjoiYTg0MjQ2ZTUtOWZiNy00ODY0LTliNDYtMmVhMzBkMTJiMWQwIiwidCI6ImRhODkwM2JhLTg0YmYtNDM1OS04M2NmLTI0MDJjN2M2NWRmMSJ9'} />
        </div>
    );
}

export default Financial;
