import { TestScheduler } from 'jest';
import { login, logout } from '../../actions/auth';

test('should generate login ction object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout ction object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});