import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
function MenuItem({ data, onClick }) {
    const cx = classNames.bind(styles);
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
