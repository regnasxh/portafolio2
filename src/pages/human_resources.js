import Dashboard from "../components/dashboard";
import Navbar from "../components/navbar";


function Human() {
    return (
        <div className="root_container">
            <Navbar />
            <Dashboard url={'https://app.powerbi.com/view?r=eyJrIjoiYWU4OTdjZjktMTMzOS00Y2NmLTg1N2EtYmNiZGJiNWRhOGU1IiwidCI6ImRhODkwM2JhLTg0YmYtNDM1OS04M2NmLTI0MDJjN2M2NWRmMSJ9'} />
        </div>
    );
}

export default Human;
