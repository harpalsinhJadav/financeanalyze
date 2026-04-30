import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Flag, 
  Filter, 
  User, 
  Settings 
} from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search transctions..." className={styles.searchInput} />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className={({ isActive }) => isActive ? styles.active : ''}>
              <PlusCircle size={20} />
              <span>Add Transaction</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/flagged" className={({ isActive }) => isActive ? styles.active : ''}>
              <Flag size={20} />
              <span>Flaged</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/filters" className={({ isActive }) => isActive ? styles.active : ''}>
              <Filter size={20} />
              <span>Filters</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ''}>
              <User size={20} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : ''}>
              <Settings size={20} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
