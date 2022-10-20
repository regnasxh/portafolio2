import "./index.css"

export default function Dashboard({ url }) {
    return (
        <div className="dashboard_container">
            <div className="dashboard_text">
                <h1>the dashboard can take a while to load, if you are on mobile please put it horizontally</h1>
            </div>
            <div className="dashboard_">
                <iframe title="Report Section" width="100%" height="100%" src={url} frameBorder={'0'} allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}