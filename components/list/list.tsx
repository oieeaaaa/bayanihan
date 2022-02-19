import cn from 'classnames'
import Card from 'components/card'
import entries from 'fixtures/entries.json'
import styles from './list.module.scss'

const List = () => (
  <div className={cn(styles.container, 'container mt-5')}>
    {entries.map((entry) => (
      <Card
        key={entry.name}
        name={entry.name}
        imgUrl={entry.imgUrl}
        address={entry.address}
      />
    ))}
  </div>
)

export default List
