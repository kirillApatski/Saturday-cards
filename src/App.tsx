import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div>
      <Typography as={'a'} href={'https://google.com'} variant="h1" color={'error'}>
        Link
      </Typography>
    </div>
  )
}
