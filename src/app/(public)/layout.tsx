import { Header } from '@/components/Header'

export default function PageLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='relative min-h-screen'>
			<Header />

			{children}
		</div>
	)
}
