import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { toggleTheme } from '../../store/slices/themeSlice';
import { setLanguage } from '../../store/slices/langSlice';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { token, user } = useSelector(state => state.auth);
  const { mode } = useSelector(state => state.theme);
  const { current: currentLang } = useSelector(state => state.lang);

  return (
    <nav className="bg-[var(--navbar-bg)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-[var(--navbar-text)]">
              InnovateYou
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] hover:bg-[var(--btn-secondary-hover)]"
              aria-label="Toggle theme"
            >
              {mode === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Language Selector */}
            <select
              value={currentLang}
              onChange={(e) => dispatch(setLanguage(e.target.value))}
              className="p-2 rounded-lg bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)]"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
            </select>

            {/* Auth Buttons */}
            {token ? (
              <>
                <span className="text-[var(--navbar-text)]">
                  {user?.username}
                </span>
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate('/login');
                  }}
                  className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-4 py-2 rounded-lg hover:bg-[var(--btn-primary-hover)]"
                >
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-4 py-2 rounded-lg hover:bg-[var(--btn-primary-hover)]"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-4 py-2 rounded-lg hover:bg-[var(--btn-primary-hover)]"
                >
                  {t('register')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}