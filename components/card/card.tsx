import Image from 'next/image'
import styles from './card.module.scss'

type Props = {
  name: string
  imgUrl: string
  address: string
}

const Card = (props: Props) => (
  <div className={styles.container} title={props.name}>
    <div className={styles.body}>
      <Image
        src={props.imgUrl}
        layout="fill"
        alt={props.name}
        objectFit="cover"
      />
    </div>
  </div>
)

export default Card
