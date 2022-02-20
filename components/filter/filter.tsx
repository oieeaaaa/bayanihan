import styles from './filter.module.scss'

const options = [
  'Extreme Poverty',
  'Disability',
  'Mental Health',
  'Child Labor',
  'Women',
  'No Degree',
  'Jobless',
  'Senior Citizen',
  'Orphan',
  'Agriculture',
  'Recreation',
  'Homesick',
  'Medical Issues',
  'Native',
  'Sexually Abused',
  'Breadwinner',
]

const Filter = () => (
  <div className="container mt-10">
    <div className="mb-3">Filter by:</div>
    <ul>
      {options.map((option) => (
        <button key={option} className={styles.button}>
          {option}
        </button>
      ))}
    </ul>
  </div>
)

export default Filter
