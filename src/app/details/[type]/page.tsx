import DetailsPage from "@/components/card-details/DetailsPage";
import {
  NATIVE_DETAILS_CAREER,
  NATIVE_DETAILS_KIDS,
  NATIVE_DETAILS_LOVE,
} from "@/constants/native-details";
import { useMemo } from "react";

export default function DetailsPageWrapper(searchParams: any) {
  const detailsObj = useMemo(() => {
    switch (searchParams?.params?.type) {
      case "love":
        return NATIVE_DETAILS_LOVE;
      case "career":
        return NATIVE_DETAILS_CAREER;
      case "kids":
        return NATIVE_DETAILS_KIDS;
      default:
        return NATIVE_DETAILS_LOVE;
    }
  }, [searchParams]);
  return <DetailsPage details={detailsObj} />;
}
