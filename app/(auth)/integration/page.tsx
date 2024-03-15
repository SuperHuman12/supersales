export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">NotionBear Integrations</h1>
            <p className="text-xl text-gray-600">Integrate with your stack and extend functionality with powerful integrations built by us and our amazing community.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <h2>
              We believe NotionBear should work with all the tools and services you use every day. That‘s why we have integrations for issue trackers, diagrams, interactive code sandboxes and more.
            </h2>
          </div>

        </div>
      </div>
    </section>
  )
}
