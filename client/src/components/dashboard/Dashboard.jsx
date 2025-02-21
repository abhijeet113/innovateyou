import { useSelector } from 'react-redux';
import AdminDashboard from './admin/AdminDashboard';
import DonorDashboard from './donor/DonorDashboard';
import NgoDashboard from './ngo/NgoDashboard';

const ROLE_COMPONENTS = {
  ADMIN: AdminDashboard,
  DONOR: DonorDashboard,
  NGO: NgoDashboard,
};

export default function Dashboard() {
  const { user } = useSelector(state => state.auth);
  const DashboardComponent = ROLE_COMPONENTS[user?.role] || DonorDashboard;

  return <DashboardComponent />;
}