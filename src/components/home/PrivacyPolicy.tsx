import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { PRIVACY_POLICY } from "./privacy-policy"

function PrivacyPolicy() {
    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <p className="cursor-pointer text-primary-foreground font-semibold text-sm hover:underline">Privacy Policy</p>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Privacy Policy</AlertDialogTitle>
                    <AlertDialogDescription className="overflow-y-scroll max-h-[500px] pr-6 flex flex-col gap-1">
                        {PRIVACY_POLICY.split("\n").map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {/* <AlertDialogCancel></AlertDialogCancel> */}
                    <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PrivacyPolicy