import { AuthResponse, User } from '../types';

const MOCK_USER: User = {
  id: 'u_123456789',
  name: 'Nguyễn Văn A',
  email: 'user@test.com',
  role: 'user',
  avatar: 'https://picsum.photos/200',
  savedProperties: []
};

const MOCK_DELAY_MS = 1500;

export const loginApi = (emailOrPhone: string, password: string): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate validation
      if (emailOrPhone === 'user@test.com' && password === '123456') {
        resolve({
          token: 'ey_mock_jwt_token_' + Date.now(),
          user: MOCK_USER
        });
      } else {
        // Simulate error
        reject(new Error('Email/Số điện thoại hoặc mật khẩu không chính xác.'));
      }
    }, MOCK_DELAY_MS);
  });
};