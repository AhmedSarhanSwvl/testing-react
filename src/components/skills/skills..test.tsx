import Skills from './skills';
import { screen, render } from '@testing-library/react';

const skills = ['basketball', 'javascript', 'typescript', 'video making'];
describe('skills', () => {
	it('renders correctly', () => {
		render(<Skills skills={skills} />);

		const skillList = screen.getByRole('list');

		expect(skillList).toBeInTheDocument();
	});
	it('renders a list of props', () => {
		render(<Skills skills={skills} />);

		const skillItems = screen.getAllByRole('listitem');

		expect(skillItems).toHaveLength(skills.length);
	});

	it('renders login button', () => {
		render(<Skills skills={skills} />);

		const loginButton = screen.getByRole('button', {
			name: 'Login',
		});

		expect(loginButton).toBeInTheDocument();
	});

	it('start learning button not rendered', () => {
		render(<Skills skills={skills} />);

		const startLearningBtn = screen.queryByRole('button', {
			name: 'start testing',
		});

		expect(startLearningBtn).not.toBeInTheDocument();
	});
});
