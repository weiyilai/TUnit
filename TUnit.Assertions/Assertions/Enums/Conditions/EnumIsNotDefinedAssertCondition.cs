﻿using TUnit.Assertions.AssertConditions;

namespace TUnit.Assertions.Assertions.Enums.Conditions;

public class EnumIsNotDefinedAssertCondition<TEnum> : BaseAssertCondition<TEnum> where TEnum : Enum
{
    protected override string GetExpectation()
    {
        return "to not be defined";
    }

    protected override Task<AssertionResult> GetResult(TEnum? actualValue, Exception? exception)
    {
        return AssertionResult.FailIf(actualValue is null, "the source enum is null")
            .OrFailIf(Enum.IsDefined(typeof(TEnum), actualValue!), "it was");
    }
}