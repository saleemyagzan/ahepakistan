import { OrganicBlob } from "@/components/Organic"

/**
 * Sitewide ambient motion: three large, very-low-opacity organic blobs that
 * wander slowly (32–46s loops) behind all page content. Fixed to the
 * viewport so it reads as depth, not decoration on any one section.
 * Never placed under the hero — each page's own hero content occludes it.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <OrganicBlob className="drift-a absolute -left-56 -top-40 w-[46rem]" color="#0B6E4F" opacity={0.045} />
      <OrganicBlob className="drift-b absolute -right-60 top-1/3 w-[42rem]" color="#1F3C88" opacity={0.04} />
      <OrganicBlob className="drift-c absolute -bottom-44 left-1/4 w-[40rem]" color="#C6A84E" opacity={0.035} />
    </div>
  )
}
