import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";


function Global() {
    return (
        <div className="root_container">
            <Navbar />
            <Dashboard url={'https://app.powerbi.com/view?r=eyJrIjoiMzBkY2VkYWMtOTM5YS00NDkxLWI2MDAtNzVkYjU1NTRkYTdlIiwidCI6ImRhODkwM2JhLTg0YmYtNDM1OS04M2NmLTI0MDJjN2M2NWRmMSJ9'} />
        </div>
    );
}

export default Global;
