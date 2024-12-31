import { Container } from 'react-bootstrap';
import JobPortalDashboard from './JobPortalDashboard';

const LayoutWrapper = ({ layout, children }) => {
    switch (layout) {
        case "JobPortalDashboard":
            return <JobPortalDashboard>{children}</JobPortalDashboard>;
        default:
            return { children }
    }
};
export default LayoutWrapper