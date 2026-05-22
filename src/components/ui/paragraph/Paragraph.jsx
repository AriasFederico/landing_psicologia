import styles from './Paragraph.module.scss';

export const Paragraph = ({ items }) => {
	return (
		<div className={styles.paragraph}>
			{items?.map((e, index) => (
				<p key={index} className={styles.text}>
					{e}
				</p>
			))}
		</div>
	);
};
