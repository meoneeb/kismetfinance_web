import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'



export const Footer = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900" >
<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-3 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight">Shane</h2>
            <div className="mt-3">
              {/* <p className="text-lg text-white">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu.
              </p> */}
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-white">
                  <p>0426 475 749</p>
                  {/* <p className="mt-1">Mon-Fri 8am to 6pm PST</p> */}
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-white">
                  <p>shane@kismetfinancegroup.com</p>
                </div>
              </div>
            </div>
          </div>
                    <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight">Josh</h2>
            <div className="mt-3">
              {/* <p className="text-lg text-white">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu.
              </p> */}
            </div>
            <div className="mt-9">
              {/* <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-white">
                  <p>0426 475 749</p>

                </div>
              </div> */}
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-white">
                  <p>josh@kismetfinancegroup.com</p>
                </div>
              </div>
            </div>
          </div>
                    <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight">Dan</h2>
            <div className="mt-3">
              {/* <p className="text-lg text-white">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu.
              </p> */}
            </div>
            <div className="mt-9">
              {/* <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-white">
                  <p>0426 475 749</p>
                </div>
              </div> */}
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-white">
                  <p>dan@kismetfinancegroup.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
