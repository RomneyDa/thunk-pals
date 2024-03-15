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
import { TERMS_OF_SERVICE } from "./terms-of-service"

function TermsOfService() {
    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <p className="cursor-pointer text-primary-foreground font-semibold text-sm hover:underline">Terms of Service</p>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Terms of Service</AlertDialogTitle>
                    <AlertDialogDescription className="overflow-y-scroll max-h-[500px] pr-6 flex flex-col gap-1">
                        {TERMS_OF_SERVICE.split("\n").map((line, index) => (
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

export default TermsOfService