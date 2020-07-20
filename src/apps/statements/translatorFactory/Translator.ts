import CommonTranslator from 'jscommons/dist/translatorFactory/Translator';
import ChangedStatementRef from '../errors/ChangedStatementRef';
import Conflict from '../errors/Conflict';
import DataBeforeFirstBoundary from '../errors/DataBeforeFirstBoundary';
import DataBeyondFinalBoundary from '../errors/DataBeyondFinalBoundary';
import DuplicateId from '../errors/DuplicateId';
import ExpiredClientError from '../errors/ExpiredClientError';
import ExtraAttachments from '../errors/ExtraAttachments';
import InvalidBoundary from '../errors/InvalidBoundary';
import InvalidContentTransferEncoding from '../errors/InvalidContentTransferEncoding';
import InvalidContentType from '../errors/InvalidContentType';
import InvalidJws from '../errors/InvalidJws';
import InvalidMethod from '../errors/InvalidMethod';
import InvalidSignatureAlgorithm from '../errors/InvalidSignatureAlgorithm';
import InvalidSignedStatement from '../errors/InvalidSignedStatement';
import InvalidVoidType from '../errors/InvalidVoidType';
import InvalidX5CChain from '../errors/InvalidX5CChain';
import InvalidX5CType from '../errors/InvalidX5CType';
import JsonSyntaxError from '../errors/JsonSyntaxError';
import MissingAttachments from '../errors/MissingAttachments';
import MissingLoadedId from '../errors/MissingLoadedId';
import MissingStatementId from '../errors/MissingStatementId';
import NoStatements from '../errors/NoStatements';
import QueryIds from '../errors/QueryIds';
import Timeout from '../errors/Timeout';
import UnequalStatementId from '../errors/UnequalStatementId';
import UnknownParams from '../errors/UnknownParams';
import UntrustedClientError from '../errors/UntrustedClientError';
import VoidingError from '../errors/VoidingError';

interface Translator extends CommonTranslator {
  readonly changedStatementRefError: (err: ChangedStatementRef) => string;
  readonly conflictError: (err: Conflict) => string;
  readonly dataBeforeFirstBoundaryError: (err: DataBeforeFirstBoundary) => string;
  readonly dataBeyondFinalBoundaryError: (err: DataBeyondFinalBoundary) => string;
  readonly duplicateIdError: (err: DuplicateId) => string;
  readonly expiredClientError: (err: ExpiredClientError) => string;
  readonly extraAttachmentsError: (err: ExtraAttachments) => string;
  readonly invalidBoundaryError: (err: InvalidBoundary) => string;
  readonly invalidContentTransferEncodingError: (err: InvalidContentTransferEncoding) => string;
  readonly invalidContentTypeError: (err: InvalidContentType) => string;
  readonly invalidJwsError: (err: InvalidJws) => string;
  readonly invalidMethodError: (err: InvalidMethod) => string;
  readonly invalidSignatureAlgorithmError: (err: InvalidSignatureAlgorithm) => string;
  readonly invalidSignedStatementError: (err: InvalidSignedStatement) => string;
  readonly invalidVoidTypeError: (err: InvalidVoidType) => string;
  readonly invalidX5CChainError: (err: InvalidX5CChain) => string;
  readonly invalidX5CTypeError: (err: InvalidX5CType) => string;
  readonly jsonSyntaxError: (err: JsonSyntaxError) => string;
  readonly missingAttachmentsError: (err: MissingAttachments) => string;
  readonly missingLoadedIdError: (err: MissingLoadedId) => string;
  readonly missingStatementIdError: (err: MissingStatementId) => string;
  readonly noStatementsError: (err: NoStatements) => string;
  readonly queryIdsError: (err: QueryIds) => string;
  readonly timeoutError: (err: Timeout) => string;
  readonly unequalStatementIdError: (err: UnequalStatementId) => string;
  readonly unknownParamsError: (err: UnknownParams) => string;
  readonly untrustedClientError: (err: UntrustedClientError) => string;
  readonly voidingErrorError: (err: VoidingError) => string;
}

export default Translator;
