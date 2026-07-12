import { OrganicBlob } from "@/components/Organic"

/**
 * Sitewide ambient motion: a slow hue-cycling gradient wash plus four large
 * organic blobs that wander independently (32–46s loops) behind all page
 * content. Fixed to the viewport so it reads as continuous depth rather than
 * a one-off decoration on a single section. Never placed under the hero —
 * each page's own hero content occludes it.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="flow-wash absolute inset-0" />
      <OrganicBlob className="drift-a absolute -left-56 -top-40 w-[46rem]" color="#0B6E4F" opacity={0.07} />
      <OrganicBlob className="drift-b absolute -right-60 top-1/3 w-[42rem]" color="#1F3C88" opacity={0.065} />
      <OrganicBlob className="drift-c absolute -bottom-44 left-1/4 w-[40rem]" color="#C6A84E" opacity={0.06} />
      <OrganicBlob className="drift-d absolute -right-32 -bottom-52 w-[34rem]" color="#8C3A44" opacity={0.05} />
    </div>
  )
}
