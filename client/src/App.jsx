import React, { useState } from 'react'; // Import useState
import Navbar from './components/Navbar';
import { JobCard, JobGrid } from './components/JobCard';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import Home from './pages/Home';
import CreateJobModal from './components/CreateJobModel'; // Rename and move this component
import FindJobs from './pages/FindJobs';
import FindTalents from './pages/FindTalents';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';

const App = () => {
    const navigate = useNavigate(); // For programmatic navigation
    const location = useLocation(); // To detect if we are on /createJobs path
    const [showCreateJobModal, setShowCreateJobModal] = useState(false);
    const [refreshFlag, setRefreshFlag] = useState(0);

    // Effect to open the modal if the URL path is /createJobs
    React.useEffect(() => {
        if (location.pathname === '/createJobs') {
            setShowCreateJobModal(true);
        } else {
            setShowCreateJobModal(false);
        }
    }, [location.pathname]); // Re-run when the path changes

    // Function to handle opening the modal (e.g., from a button on Home page)
    const handleOpenCreateJobModal = () => {
        navigate('/createJobs'); // Change URL to /createJobs, which will trigger the useEffect to open modal
    };

    // Function to handle closing the modal
    const handleCloseCreateJobModal = () => {
        // Go back to the previous page or home page
        navigate(-1); // Go back one step in history
        // Or if you always want to go home: navigate('/');
        setShowCreateJobModal(false); // Explicitly close the modal state
    };

    const handleJobCreated = () => {
        setRefreshFlag(f => f + 1);
        handleCloseCreateJobModal();
    };

    return (
        <>
            <Navbar />
            <Routes>
                {/* Pass the handleOpenCreateJobModal to Home so it can trigger the modal */}
                <Route path="/" element={<Home refreshFlag={refreshFlag} onOpenCreateJobModal={handleOpenCreateJobModal} />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/findjobs" element={<FindJobs />} />
                <Route path="/findtalents" element={<FindTalents />} />
                {/* The /createJobs route will now simply be a flag to show the modal */}
                {/* No element needed here as the modal is conditionally rendered below */}
                <Route path="/createJobs" element={null} /> 
            </Routes>

            {/* Conditionally render the modal outside of Routes */}
            {showCreateJobModal && <CreateJobModal onClose={handleCloseCreateJobModal} onJobCreated={handleJobCreated} />}
        </>
    );
};

export default App;
